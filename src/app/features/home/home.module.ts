import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardGuard } from './guard/dashboard/dashboard.guard';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent, canActivateChild: [DashboardGuard] ,children: [
        {path: 'settings', component: SettingsComponent}
      ]}
    ])
  ],
  providers: [DashboardGuard]
})
export class HomeModule { }
