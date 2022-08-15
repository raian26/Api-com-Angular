import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
constructor(private http:HttpClient) {}

//vetor

cadastrar(f : FormGroup){
    console.log(f.value);
    return this.http.post<Curso>('http://localhost/api/php/cadastrar', f.value);
  }

  // Listar cursos
  listar(){
    return this.http.get<Curso[]>('http://localhost/api/php/');
  }
}

