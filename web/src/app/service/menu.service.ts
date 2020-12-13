import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Menu} from '../func/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Array<Menu>>([
    // tslint:disable-next-line:max-line-length
    new Menu({name: '首页', icon: 'fas fa-car', url: 'dashboard', roles: [Menu.ROLE_ADMIN, Menu.ROLE_COMMON, Menu.ROLE_REPAIR, Menu.ROLE_MANAGER]}),
    new Menu({name: '类型管理', icon: 'far fa-calendar-alt', url: 'type', roles: [Menu.ROLE_ADMIN]}),
    new Menu({name: '部门管理', icon: 'fas fa-clipboard-list', url: 'department', roles: [Menu.ROLE_ADMIN]}),
    // tslint:disable-next-line:max-line-length
    new Menu({name: '设备管理', icon: 'fas fa-clipboard-list', url: 'equipment', roles: [Menu.ROLE_ADMIN, Menu.ROLE_MANAGER, Menu.ROLE_COMMON]}),
    new Menu({name: '人员管理', icon: 'far fa-calendar-alt', url: 'user', roles: [Menu.ROLE_ADMIN]}),
    new Menu({name: '人员管理', icon: 'far fa-calendar-alt', url: 'manageUser', roles: [Menu.ROLE_MANAGER]}),
    new Menu({name: '设备维修', icon: 'far fa-calendar-alt', url: 'repairDepartment', roles: [Menu.ROLE_REPAIR]}),
    // tslint:disable-next-line:max-line-length
    new Menu({name: '个人中心', icon: 'fas fa-user',  url: 'personalCenter',  roles: [Menu.ROLE_ADMIN, Menu.ROLE_COMMON, Menu.ROLE_REPAIR, Menu.ROLE_MANAGER]})
  ]);

  constructor() {
  }

  getAll(): Observable<Array<Menu>> {
    return this.menusSubject.asObservable();
  }

  addMenu(menu: Menu): void {
    const menus = this.menusSubject.value;
    menus.push(menu);
    this.menusSubject.next(menus);
  }
}
