import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path : '' , component: LoginComponent},
  { path: 'users' ,component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'posts', component: PostsComponent , canActivate: [AuthGuard]},
  { path: 'posts/:id' , component: PostsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
