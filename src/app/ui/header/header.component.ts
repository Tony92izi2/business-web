
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
    // this.currentUser = localStorage.getItem('currentUser');
    $('body').addClass('df');

    $('navbarDropdownPortfolio').on('click', function (e) {
      $(this).next().toggle();
    });

    $('.dropdown-menu-right').on('click', function (e) {
    //   $('#navbarDropdownPortfolio').css({
    //     'font-size': '20px',
    //     'color': 'green',
    //     'border-bottom': '5px solid red',
    //     'font-weight': 'bold'
    // });
      e.stopPropagation();
    });


  }

  reinitdropdown() {

  }

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.router.navigate(['/']);
  location.reload();
}

}
