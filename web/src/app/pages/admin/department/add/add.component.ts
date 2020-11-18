import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../../func/User';
import {CommonService} from '../../../../service/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  departmentForm: FormGroup;
  state: Array<User>;

  constructor(private commomService: CommonService,
              private router: Router,
              private builder: FormBuilder){ }

  ngOnInit() {
    this.departmentForm = this.builder.group({
      name: [''],
      code: [''],
      user: [''],
    }, {updateOn: 'blur'});
    this.state = new Array<User>();
    this.state.push(new User({id:1, name:'张三', username: 'zhangsan'}));
    this.state.push(new User({id:2, name:'李四', username: 'lisi'}));
  }

  /** https://angular.cn/guide/form-validation#built-in-validators */
  get name(): AbstractControl {
    return this.departmentForm.get('name');
  }

  get code(): AbstractControl {
    return this.departmentForm.get('code');
  }



  submit() {
    this.commomService.success(() => {
      this.router.navigateByUrl('department');
    });
  }

}
