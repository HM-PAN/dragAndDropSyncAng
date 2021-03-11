import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramAllModule, DiagramModule, OverviewAllModule, SymbolPaletteAllModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    DiagramAllModule,
    SymbolPaletteAllModule,
    OverviewAllModule,
    BrowserModule,
    DiagramAllModule,
     SymbolPaletteAllModule,
      OverviewAllModule,
 BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
