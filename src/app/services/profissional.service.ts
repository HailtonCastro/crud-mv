import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProfissionalModel } from '../profissional/profissional.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  apiURL  = environment.apiUrl;

  static emitirCursoCriadoEditao = new EventEmitter<boolean>()

  constructor(
    private http : HttpClient
  ) {
  }
  
  public buscaTodos():Observable<[ProfissionalModel]>{
    return this.http.get<[ProfissionalModel]>(`${this.apiURL}/profissional/`)
  }

  public buscaPorId(idProfissional) : Observable <ProfissionalModel>{
    return this.http.get<ProfissionalModel>(`${this.apiURL}/profissional/${idProfissional}`)
  }

  public add(profissional){
    return this.http.post(`${this.apiURL}/profissional/`, profissional)
  }

  edita(profissional){
    return this.http.put(`${this.apiURL}/profissional/`, profissional)
  }

  public delete(id) {
    return this.http.delete(`${this.apiURL}/profissional/${id}`);
  }
}
