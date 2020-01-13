import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstabelecimentoModel } from '../estabelecimento/estabelecimento.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  apiURL  = environment.apiUrl;

  static emitirCursoCriadoEditao = new EventEmitter<boolean>()

  constructor(
    private http : HttpClient
  ) {
  }
  
  public buscaTodos():Observable<[EstabelecimentoModel]>{
    return this.http.get<[EstabelecimentoModel]>(`${this.apiURL}/estabelecimento/`)
  }

  public buscaPorId(id) : Observable <EstabelecimentoModel>{
    return this.http.get<EstabelecimentoModel>(`${this.apiURL}/estabelecimento/${id}`)
  }

  public add(estabelecimento){
    return this.http.post(`${this.apiURL}/estabelecimento/`, estabelecimento)
  }

  edita(estabelecimento){
    return this.http.put(`${this.apiURL}/estabelecimento/`, estabelecimento)
  }

  public delete(id) {
    return this.http.delete(`${this.apiURL}/estabelecimento/${id}`);
  }
}
