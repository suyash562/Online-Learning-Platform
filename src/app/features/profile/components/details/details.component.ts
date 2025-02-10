import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  loggedIn = true;
  constructor(private profileService : UserService,private router : Router){
    this.loggedIn = profileService.loggedIn;
    // if(!this.loggedIn){
      // router.navigateByUrl('profile/login');   // absolute path
      // router.navigate(['login'], {relativeTo: new ActivatedRoute()}); // relative path. profile/login
    // }
  }
}
