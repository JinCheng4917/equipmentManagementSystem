import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './part/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'department',
        loadChildren: () => import('./pages/admin/department/department.module').then(m => m.DepartmentModule),
        data: {
          title: '部门管理'
        }
      },
      {
        path: 'equipment',
        loadChildren: () => import('./pages/admin/equipment/equipment.module').then(m => m.EquipmentModule),
        data: {
          title: '设备管理'
        }
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          title: '首页'
        }
      },
      {
        path: 'type',
        loadChildren: () => import('./pages/admin/type/type.module').then(m => m.TypeModule),
        data: {
          title: '类型管理'
        }
      },
      {
        path: 'personalCenter',
        loadChildren: () => import('./pages/personal-center/personal-center.module').then(m => m.PersonalCenterModule),
        data: {
          title: '个人中心'
        }
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/admin/user/user.module').then(m => m.UserModule),
        data: {
          title: '用户管理'
        }
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
