import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { MoviesService } from './services/movies.service'
import { ActorsService } from './services/actors.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MoviesByActorComponent } from './components/movies-by-actor/movies-by-actor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailComponent,
    HomeComponent,
    ActorsComponent,
    ActorDetailComponent,
    MoviesByActorComponent,
    CarouselComponent,
    MoviesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    MoviesService,
    ActorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
