import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curso {
  nombre: string;
  descripcion: string;
  duracion: string;
}

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css'
})
export class ListaCursos {

  cursos: Curso[] = [
    {
      nombre: 'Programación',
      descripcion: 'Aprendizaje de lógica y desarrollo de software.',
      duracion: '8 semanas'
    },
    {
      nombre: 'Base de datos',
      descripcion: 'Diseño y administración de bases de datos.',
      duracion: '6 semanas'
    },
    {
      nombre: 'Desarrollo Web',
      descripcion: 'Creación de aplicaciones y páginas web.',
      duracion: '8 semanas'
    },
    {
      nombre: 'Ingeniería de Software',
      descripcion: 'Análisis y desarrollo de sistemas informáticos.',
      duracion: '7 semanas'
    }
  ];

}