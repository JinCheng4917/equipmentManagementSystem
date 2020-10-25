import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './part/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    data: {authModel: LoginComponent.AUTH_MODEL_PASSWORD_OTP},
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
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
        path: 'place',
        loadChildren: () => import('./pages/admin/place/place.module').then(m => m.PlaceModule),
        data: {
          title: '地区管理'
        }
      },
      {
        path: 'status',
        loadChildren: () => import('./pages/admin/status/status.module').then(m => m.StatusModule),
        data: {
          title: '状态管理'
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
        path: 'personal',
        loadChildren: () => import('./pages/personal/personal.module').then(m => m.PersonalModule),
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
      {
        path: 'role',
        loadChildren: () => import('./pages/admin/role/role.module').then(m => m.RoleModule),
        data: {
          title: '角色管理'
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
