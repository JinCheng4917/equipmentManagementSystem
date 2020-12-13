import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../base/page';
import {User} from '../func/User';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Equipment} from '../func/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private url = 'equipment';
  constructor(private commonService: CommonService,
              private httpClient: HttpClient,
              private router: Router) { }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public getToRepair(page: number, size: number): Observable<Page<Equipment>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Equipment>>(`${this.url}/getToRepair`, {params});
  }

  save(equipment: Equipment): any {
    console.log(equipment);
    return this.httpClient.post(`${this.url}`, equipment);
  }

  public delete(equipmentId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.url}/${equipmentId.toString()}`);
  }

  /**
   * 更新
   */
  public report(equipmentId: number, equipment: Equipment): Observable<Equipment> {
    return this.httpClient.put<Equipment>(`${this.url}/report/${equipmentId.toString()}`, equipment);
  }

  /**
   * 更新
   */
  public repair(equipmentId: number, equipment: Equipment): Observable<Equipment> {
    return this.httpClient.put<Equipment>(`${this.url}/repair/${equipmentId.toString()}`, equipment);
  }

  public getAll(page: number, size: number): Observable<Page<Equipment>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Equipment>>(`${this.url}/getAll`, {params});
  }

  /**
   * 更新
   */
  public scrap(equipmentId: number, equipment: Equipment): Observable<Equipment> {
    return this.httpClient.put<Equipment>(`${this.url}/scrap/${equipmentId.toString()}`, equipment);
  }

  /**
   * 根据id获取订单
   * @param id  订单id
   */
  public getById(id: number): Observable<Equipment> {
    return this.httpClient.get<Equipment>(`${this.url}/${id}`);
  }

  /**
   * 更新
   */
  update(equipmentId: number, equipment: Equipment): Observable<Equipment> {
    return this.httpClient.put<Equipment>(`${this.url}/${equipmentId.toString()}`, equipment);
  }
}
