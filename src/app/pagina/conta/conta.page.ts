import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  verSaldo() {
    var botao = document.getElementById('ver')!;
    if (document.getElementById('saldo')!.hidden == false) {
      botao.innerHTML = `Clique para vizualizar <ion-icon name="eye-outline"></ion-icon>`;
      document.getElementById('saldo')!.hidden = true;
    } else {
      botao.innerHTML = `Clique para Ocultar <ion-icon name="eye-off-outline"></ion-icon>`;
      document.getElementById('saldo')!.hidden = false;
    }
    
  }

}
