import { Component } from '@angular/core';
import { Projeto } from './prejeto/projeto';
import { Projeto2 } from './projeto2/projeto2';
import { Cursos } from './cursos/cursos';
import { DataBinding } from './data-binding/data-binding';
import { RouterOutlet } from '@angular/router';

/*esse aqui é o meu "module" adaption*/
/*Fazer o import da classe e add no app.html*/

@Component({
  selector: 'app-root',
  imports: [Projeto, Projeto2, Cursos, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Testes';
}
