import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../func/User";

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
  constructor(private userService: UserService) { }

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
}
