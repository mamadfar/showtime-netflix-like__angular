import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbg: { [key: string]: string } | null = null;
  url: string="";

  constructor(private router: Router) {
    this.url = this.router.url;
  }

  @HostListener("document:scroll") scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        "background-color": "#000000"
      }
    } else {
      this.navbg = null
    }
  }
}
