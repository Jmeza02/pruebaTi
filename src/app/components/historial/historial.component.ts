import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  title = 'Techreo Fintech3';
}
