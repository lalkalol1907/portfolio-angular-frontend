import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./PortfolioComponent/portfolio.component";
import {NotfoundComponent} from "./NotFoundComponent/notfound.component";

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
