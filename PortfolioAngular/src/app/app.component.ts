import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate(
              '700ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ transform: 'translateX(0%)', opacity: 1 })
            )
          ], { optional: true }),
          query(':leave', [
            animate(
              '500ms cubic-bezier(0.25, 0.8, 0.25, 1)',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            )
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  isMenuOpen: boolean = false; // Track menu visibility

  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu
  }

  scrollToContact() {
    this.router.navigate(['/contactForm']).then(() => {
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}