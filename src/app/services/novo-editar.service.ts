import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoEditarService {

  public static emitirCursoCriadoEditado = new EventEmitter<boolean>()

  constructor() { }

  addNovo(){
    NovoEditarService.emitirCursoCriadoEditado.emit(true)
  }
}
