import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: object[];
  public page: number = 0;
  public paramSubcription: Subscription;

  constructor(
    public movieService: MoviesService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubcription = this.route.paramMap.subscribe(paramsMap => {
      this.getMovies(paramsMap['params']['category'])
    })
  }
  getMovies(category: string) {
    this.movieService.getMovies(category, 'es-ES', '1').subscribe(
      res => this.movies = res['results'],
      error => console.log(error)
    )
  }
  ngOnDestroy() {
    this.paramSubcription.unsubscribe()
  }
}
