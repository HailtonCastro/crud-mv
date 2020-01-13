import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfissionalService } from '../services/profissional.service';
import { NovoEditarService } from '../services/novo-editar.service';
import { EstabelecimentoService } from '../services/estabelecimento.service';


@Component({
  selector: 'app-novo-edita',
  templateUrl: './novo-edita.component.html',
  styleUrls: ['./novo-edita.component.css']
})
export class NovoEditaComponent implements OnInit {

  @Input() objetoParaEdicao;
  @Input() tipoPai: string;
  formulario : FormGroup;
  valido : boolean = true
  
  constructor(
    private fb: FormBuilder,
    private _profissionalService : ProfissionalService,
    private _estabelecimentoService : EstabelecimentoService,
    private _novoEdita : NovoEditarService
  ) { 

  }

  ngOnInit() {    
    this.formulario = this.fb.group({
      id : [null],
      nome : [null, Validators.required],
      endereco : [null, Validators.required],
      dateCadastro : [null],
      dateEdicao : [null]
    })
  }

  ngOnChanges(){ 
    if (this.objetoParaEdicao) {
      this.formulario.patchValue({
        id : this.objetoParaEdicao.id,
        nome : this.objetoParaEdicao.nome,
        endereco: this.objetoParaEdicao.endereco,
        dateCadastro : this.objetoParaEdicao.dateCadastro,
        dateEdicao : this.objetoParaEdicao.dateEdicao
      })
    }
  }

  addNovo(){    
    if (this.formulario.valid) {
      this.valido = this.formulario.valid
      if (this.tipoPai == "Profissional") {
        this._profissionalService.add(this.formulario.value).subscribe(
          resposta=>{
            this.formulario.reset()
            this._novoEdita.addNovo()
          }
        )
      }
      if (this.tipoPai == "Estabelecimento") {
        this._estabelecimentoService.add(this.formulario.value).subscribe(
          resposta=>{
            this.formulario.reset()
            this._novoEdita.addNovo()
          }
        )
      }  
    }else{
      this.valido = this.formulario.valid
    }
     
      
    
    
  }

  atualiza(){
    if (this.tipoPai == "Profissional") {
      this._profissionalService.edita(this.formulario.value).subscribe(
        resposta=>{
          this.formulario.reset()
          this._novoEdita.addNovo()
        }
      )
    }
    if (this.tipoPai == "Estabelecimento") {
      this._estabelecimentoService.edita(this.formulario.value).subscribe(
        resposta=>{
          this.formulario.reset()
          this._novoEdita.addNovo()
        }
      )
    }
  }

  resetForm(){
    this.formulario.reset()
  }
}
