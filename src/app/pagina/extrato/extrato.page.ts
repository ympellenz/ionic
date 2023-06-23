import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExtratoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
