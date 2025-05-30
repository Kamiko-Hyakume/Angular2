import { Component } from '@angular/core';
import { Projeto } from './prejeto/projeto';
import { Projeto2 } from './projeto2/projeto2';
import { CursosModule } from './cursos/cursos-module';
import { RouterOutlet } from '@angular/router';
import { Teste } from "./cursos/teste";

/*esse aqui é o meu "module" adaption*/
/*Fazer o import da classe e add no app.html*/

@Component({
  selector: 'app-root',
  imports: [Projeto, Projeto2, CursosModule, Teste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hi';
}
