import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  imports: [NavComponent],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
