import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Techreo Fintech';

  constructor( private router: Router){}

  historial(){
    this.router.navigateByUrl('/historial');
  }

}


