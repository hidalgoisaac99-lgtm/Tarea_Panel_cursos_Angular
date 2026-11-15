import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Encabezado } from './componentes/encabezado/encabezado';
import { ListaCursos } from './componentes/lista-cursos/lista-cursos';
import { PiePagina } from './componentes/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Encabezado, ListaCursos, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
