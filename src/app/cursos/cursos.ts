import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-teste',
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  nomeGithub: string = '';
  cursos: string[] = [] ;

  constructor(private cursosService: CursosService){
    this.nomeGithub = 'https://github.com/Kamiko-Hyakume';
    
    // var servico = new CursosSpec();

    this.cursos = this.cursosService.getCursos();

  }


}
