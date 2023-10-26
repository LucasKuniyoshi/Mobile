import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '0';
  valor1! : number; //criou sem inicializar "!"
  valor2! : number;
  operacao! : number;
  
  constructor() {}

  adicionarNumero(valor : string){
    if((this.visor.length == 1) && (this.visor == '0')){ //se só tiver o zero
      this.visor = valor; //sobrescreve o valor no zero
    }else{
      this.visor += valor;//vai adicionando numero a numero
    }
  }

  adicionarOperacao(valor : number){
    this.operacao = valor;
    this.valor1 = +this.visor; //transforma a string em numerico
    //this.valor1 = Number(this.visor);
    this.zerar();
  }

  trocaSinal(){
    //this.valor1 = +this.visor;
    this.visor ="" +(+this.visor * (-1)); //="" => transforma o que está depois em string
                // ^ => "+" mais de concatenacao 
  }

  porcentagem(){
    this.visor ="" + ((+this.visor) / 100);
  }

  virgula(){
    if(!(this.visor.includes('.')))
    this.visor += '.';
  }

  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0: {
        this.visor ="" + (this.valor1 + this.valor2);
        break;
      }
      case 1: {
        this.visor ="" + (this.valor1 - this.valor2);
        break;
      }
      case 2: {
        this.visor ="" + (this.valor1 * this.valor2);
        break;
      }
      case 3: {
        this.visor ="" + (this.valor1 / this.valor2);
        break;
      }
    }
  }

  zerar(){
    this.visor = '0';
  }
}
