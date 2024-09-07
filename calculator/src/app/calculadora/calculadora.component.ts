import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  valor1: number | null = null;
  valor2: number | null = null;
  operacao: string = '+';
  resultado: number | string = '';

  setOperacao(operacao: string) {
    this.operacao = operacao;
  }

  calcular() {
    if (this.valor1 !== null && this.valor2 !== null) {
      switch (this.operacao) {
        case '+':
          this.resultado = this.valor1 + this.valor2;
          break;
        case '-':
          this.resultado = this.valor1 - this.valor2;
          break;
        case '*':
          this.resultado = this.valor1 * this.valor2;
          break;
        case '/':
          this.resultado = this.valor1 / this.valor2;
          break;
        default:
          this.resultado = 'Operação inválida';
      }
    } else {
      alert('Por favor, insira números válidos.');
    }
  }

  limpar() {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = '';
    this.operacao = '+';
  }
}