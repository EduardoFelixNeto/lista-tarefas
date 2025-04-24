import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({

  selector: 'app-calculadora',

  templateUrl: './calculadora.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],

  styleUrls: ['./calculadora.component.css']

})

export class CalculadoraComponent {

  public numero1: number = 0;

  public numero2: number = 0;

  public operacao: string = 'soma';

  public resultado: number = 0;


  calcular() {

    switch(this.operacao) {

      case 'soma':

        this.resultado = this.numero1 + this.numero2;

        break;

      case 'subtracao':

        this.resultado = this.numero1 - this.numero2;

        break;

      case 'multiplicacao':

        this.resultado = this.numero1 * this.numero2;

        break;

      case 'divisao':

        if (this.numero2 !== 0) {

          this.resultado = this.numero1 / this.numero2;

        } else {

          alert('Não é possível dividir por zero!');

        }

        break;

    }

  }

}
