import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  nomeGithub: string = '';
  cursos: string[] = ['Java', 'Angular', 'HTML'];

  constructor(){
    this.nomeGithub = 'https://github.com/Kamiko-Hyakume';
  }
}
