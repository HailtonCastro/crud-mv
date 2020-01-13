import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { HttpClientModule } from '@angular/common/http';
import { NovoEditaComponent } from './novo-edita/novo-edita.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    EstabelecimentoComponent,
    NovoEditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
