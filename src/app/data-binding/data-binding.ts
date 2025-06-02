import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  url: string = 'https://github.com/Kamiko-Hyakume';

  cursoAngular: boolean = true;

  urlImagem = 'https://conexaoplaneta.com.br/wp-content/uploads/2023/07/comedy-pet-abre-conexao-planeta-1024x708.jpg';

  valorAtual: string = '';
  valorSalvo: string = '';

  getValor() {
    return 1;
  }
  getCurtiCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão clicado!!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual =  (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

}
