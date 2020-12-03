import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Page} from "../base/page";
import {User} from "../func/User";
import {CommonService} from "./common.service";
import {HttpClient} from "@angular/common/http";
import {Department} from "../func/Department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = 'department';
  constructor(private commonService: CommonService,
              private httpClient: HttpClient,) { }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public getAll(page: number, size: number): Observable<Page<Department>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Department>>(`${this.url}/getAll`, {params});
  }

  findAll(): any{
    return this.httpClient.get<Array<Department>>(`${this.url}`);
  }
}
