import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../func/User';
import {CommonService} from "../../../service/common.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  /**
   * 分页信息
   */
  public params = {
    page: 0,
    size: 10,
  };

  /* 分页数据 */
  users = {
    totalPages: 0,
    content: new Array<User>()
  };
  constructor(private userService: UserService,
              private commonService: CommonService) { }

  ngOnInit(): void {
    this.pageAll();
  }

  public pageAll(): void {
    this.userService.getAll(this.params.page,
      this.params.size)
      .subscribe((response: { totalPages: number, content: Array<User> }) => {
        this.users = response;
        console.log(response);
        // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
      });
  }

  delete(user: User): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.userService.delete(user.id).subscribe(() => {
          this.commonService.success(() => {
          }, '删除成功');
          this.pageAll();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将删除人员');
  }
}
