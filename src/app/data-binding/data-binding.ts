import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  url: string = 'https://github.com/Kamiko-Hyakume';

  cursoAngular: boolean = true;

  getValor() {
    return 1;
  }
  getCurtiCurso(){
    return true;
  }
  
}
