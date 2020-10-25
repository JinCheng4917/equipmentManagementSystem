import { Component, OnDestroy, OnInit } from '@angular/core';
import {Menu} from '../../func/Menu';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit, OnDestroy {
  menus: Array<Menu>;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.menus = new Array<Menu>();
    this.menus.push(new Menu({id: 1, name: '部门管理', url: 'department'}));
    this.menus.push(new Menu({id: 2, name: '设备管理', url: 'equipment'}));
    this.menus.push(new Menu({id: 3, name: '地区管理', url: 'place'}));
    this.menus.push(new Menu({id: 4, name: '角色管理', url: 'role'}));
    this.menus.push(new Menu({id: 5, name: '状态管理', url: 'status'}));
    this.menus.push(new Menu({id: 6, name: '类型管理', url: 'type'}));
    this.menus.push(new Menu({id: 1, name: '人员管理', url: 'user'}));
  }

  ngOnDestroy(): void {
  }

  getBackgroundColor(menu: Menu): string {
    if (this.active(menu)) {
      return environment.color;
    }
  }

  getTextColor(menu: Menu): string {
    if (this.active(menu)) {
      return 'white';
    }
  }

  /**
   * 判断当前菜单是否激活
   * @param menu 菜单
   */
  active(menu: Menu): boolean {
    // 截取/的位置
    const start = this.router.url.indexOf('/');
    const end = this.router.url.indexOf('/', start + 1);

    // 定义主路由
    let mainRoute: string;

    // 根据是否有第2个/选择截取方式
    if (end !== -1) {
      mainRoute = this.router.url.substring(start + 1, end);
    } else {
      mainRoute = this.router.url.substring(start + 1, this.router.url.length);
    }

    // 判断当前路由是否激活
    return mainRoute === menu.url;
  }
  navigate(menu: Menu) {
    this.router.navigateByUrl(menu.url);
  }
}
