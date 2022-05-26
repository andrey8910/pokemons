import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { MaterialModule } from './material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesMenuComponent } from './components/routes-menu/routes-menu.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgxOwlCarouselComponent } from './components/ngx-owl-carousel/ngx-owl-carousel.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'all', component: AllPokemonsComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoutesMenuComponent,
    NotFoundPageComponent,
    AllPokemonsComponent,
    NgxOwlCarouselComponent,
    HomePageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
