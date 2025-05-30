import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  imports: [CommonModule],
  templateUrl: './teste.html',
  styleUrl: './teste.css'
})
export class Teste {
  nomeGithub: string = '';
  cursos: string[] = ['Java', 'Angular', 'HTML'];

  constructor(){
    this.nomeGithub = 'https://github.com/Kamiko-Hyakume';
  }
}
