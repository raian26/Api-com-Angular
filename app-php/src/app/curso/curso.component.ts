import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-principal',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // Objeto de formulario do tipo Curso
 formulario = new FormGroup({
  nomeCurso : new FormControl(''),
  valorCurso : new FormControl('')
 });

  // Vetor para listar os cursos
  vetor : Curso[] = [];

  // Construtor
 
  constructor(private servico : CursoService) { }

  // Ao inicializar o componente, executa o método para listar os cursos
  ngOnInit(): void {
    this.listar();
  }

  // Método para cadastrar
  cadastrar(){
    this.servico.cadastrar(this.formulario).subscribe((retorno: any) => {this.vetor.push(retorno)});
  }

  // Método para listar
  listar(){
    this.servico.listar().subscribe((dados: Curso[]) => {this.vetor = dados});
  }

}
