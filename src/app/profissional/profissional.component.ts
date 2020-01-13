import { Component, OnInit, Output, SimpleChanges } from '@angular/core';

import { ProfissionalModel } from './profissional.model';
import { ProfissionalService } from '../services/profissional.service';
import { NovoEditarService } from '../services/novo-editar.service';

@Component({
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  profissionais : ProfissionalModel[]
  profissionalEdicao : ProfissionalModel
  tipoPai : String = "Profissional"

  constructor(
    private _profissionalService : ProfissionalService,    
  ) { }

  ngOnInit() {
    this.buscaTodos()
    NovoEditarService.emitirCursoCriadoEditado.subscribe(
      resposta => {
        this.buscaTodos()
      }
    )   
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buscaTodos()    
  }

  buscaTodos(){
    this._profissionalService.buscaTodos().subscribe(
      resposta => {
        this.profissionais = resposta        
      },
      erro => {
        console.log(erro)
      }
    )  
  }

  buscaPorId(idProfissional){
    this._profissionalService.buscaPorId(idProfissional).subscribe(
      resposta => {
        this.profissionalEdicao = resposta
      },
      erro => {
        console.log(erro)
      }
    )
  }

  edita(profissional){
    this.profissionalEdicao = profissional
  }  

  delete(id){
    this._profissionalService.delete(id).subscribe(
      resposta => {
        this.buscaTodos()       
      },
      error => {       
        console.log(error)
      }
    )
  }

}
