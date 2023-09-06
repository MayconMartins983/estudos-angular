import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './pages/BehaviorSubject/produtos/produtos.component';
import { Produtos2Component } from './pages/Subject/produtos2/produtos2.component';
import { Header2Component } from './pages/Subject/header2/header2.component';
import { HeaderComponent } from './pages/BehaviorSubject/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    Produtos2Component,
    Header2Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
