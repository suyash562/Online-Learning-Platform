import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileGuard } from './guard/profile/profile.guard';


@NgModule({
  declarations: [
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'details', component: DetailsComponent, canActivate: [ProfileGuard]},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [ProfileGuard]
})
export class ProfileModule { }
