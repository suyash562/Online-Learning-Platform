import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { CoursesModule } from './features/courses/courses.module';
import { ProfileModule } from './features/profile/profile.module';
import { DefaultModule } from './features/default/default.module';
import { ProfileGuard } from './features/profile/guard/profile/profile.guard';

const routes: Routes = [
  {path: 'home', loadChildren: ()=> import('./features/home/home.module').then(m => HomeModule), canActivate: [ProfileGuard]},
  {path: 'profile', loadChildren: ()=> import('./features/profile/profile.module').then(m => ProfileModule)},
  {path: 'courses', loadChildren: ()=> import('./features/courses/courses.module').then(m => CoursesModule)},
  {path: '**', loadChildren: ()=> import('./features/default/default.module').then(m => DefaultModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
