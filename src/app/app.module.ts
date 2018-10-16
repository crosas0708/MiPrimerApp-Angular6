import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloMundo } from './primercomponente/primer.component';
import { SegundoComp } from './segundocomponente/segundo.component';
import { TercerComp } from './tercercomponente/tercer.componente';

@NgModule({
  declarations: [
    AppComponent,
    HelloMundo,
    SegundoComp,
    TercerComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
