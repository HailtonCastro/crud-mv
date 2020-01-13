import { Component, OnInit, SimpleChanges } from '@angular/core';
import { EstabelecimentoService } from '../services/estabelecimento.service';
import { EstabelecimentoModel } from './estabelecimento.model';
import { NovoEditarService } from '../services/novo-editar.service';


@Component({
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos : EstabelecimentoModel[]
  estabelecimentoEdicao : EstabelecimentoModel
  tipoPai : String = "Estabelecimento"

  constructor(
    private _estabelecimentoService : EstabelecimentoService
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
    this._estabelecimentoService.buscaTodos().subscribe(
      resposta => {
        this.estabelecimentos = resposta
       
      },
      erro => {
        console.log(erro)
      }
    )  
  }

  buscaPorId(id){
    this._estabelecimentoService.buscaPorId(id).subscribe(
      resposta => {
        this.estabelecimentoEdicao = resposta
      },
      erro => {
        console.log(erro)
      }
    )
  }

  editarEstabelecimento(estabelecimento){
    this.estabelecimentoEdicao = estabelecimento
  }

  delete(id){
    console.log(id)
    this._estabelecimentoService.delete(id).subscribe(
      resposta => {
        this.buscaTodos()       
      },
      error => {       
        console.log(error)
      }
    )
  }
}
