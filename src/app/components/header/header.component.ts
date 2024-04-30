import {Component, Input, ViewChild} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {RatingStarsComponent} from "../subComponents/rating-stars/rating-stars.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(RatingStarsComponent) ratingStarsComponent!: RatingStarsComponent;

  isMenuOpen = false;
  isPageActive = false;
  isHovered = false;


  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isPageActive = this.isActive((event as NavigationEnd).urlAfterRedirects);
      });
  }
  isActive(url: string): boolean {
    // Get the current URL
    const currentUrl = this.router.url;

    // Check if the current URL starts with the provided URL
    // For example, if the current URL is '/home' and url is '/home', return true
    return currentUrl.startsWith(url);
  }

}
