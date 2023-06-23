import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Minha Conta', url: '/conta', icon: 'cash' },
    { title: 'Extrato', url: '/extrato', icon: 'receipt' },
    { title: 'Perfil de Gastos', url: '/gastos', icon: 'bar-chart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
