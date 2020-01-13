import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';


const routes: Routes = [
  {
    path:"",
    component: ProfissionalComponent
  },
  {
    path:"profissional",
    component: ProfissionalComponent
  },
  {
    path:"estabelecimento",
    component: EstabelecimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
