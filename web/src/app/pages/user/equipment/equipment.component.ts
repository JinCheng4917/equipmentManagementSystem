import { Component, OnInit } from '@angular/core';
import {Department} from '../../../func/Department';
import {EquipmentService} from '../../../service/equipment.service';
import {Equipment} from '../../../func/Equipment';
import {Type} from "../../../func/Type";
import {HttpErrorResponse} from "@angular/common/http";
import {CommonService} from "../../../service/common.service";
import {AuthService} from "../../../service/auth.service";
import {User} from "../../../func/User";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  /**
   * 分页信息
   */
  public params = {
    page: 0,
    size: 10,
  };

  /* 分页数据 */
  equipments = {
    totalPages: 0,
    content: new Array<Equipment>()
  };
  currentUser: User;
  fontColor: any;
  constructor(private equipmentService: EquipmentService,
              private commonService: CommonService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
        console.log(user);
      });
    this.pageAll();
  }


  public pageAll(): void {
    this.equipmentService.getAll(this.params.page,
      this.params.size)
      .subscribe((response: { totalPages: number, content: Array<Equipment> }) => {
        this.equipments = response;
        console.log(this.equipments);
      });
  }

  getFontColor(status: number): any {
    if (status === 0) {
      this.fontColor = '#2e5fee';
    }
    else if (status === 1) {
      this.fontColor = '#37be2e';
    }
    else if (status === 2) {
      this.fontColor = '#ac3d09';
    }
    else if (status === 3) {
      this.fontColor = '#df2e2e';
    }
    return this.fontColor;
  }

  delete(equipment: Equipment): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.equipmentService.delete(equipment.id).subscribe(() => {
          this.commonService.success(() => {
          }, '删除成功');
          this.pageAll();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将删除设备');
  }

  report(equipment: Equipment): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.equipmentService.report(equipment.id, equipment).subscribe(() => {
          this.commonService.success(() => {
          }, '报修成功');
          this.pageAll();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '是否确认报修');
  }
}
