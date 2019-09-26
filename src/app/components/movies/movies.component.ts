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
  public page: number = 1;
  public paramSubcription: Subscription;
  public category: string;

  constructor(
    public movieService: MoviesService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubcription = this.route.paramMap.subscribe(paramsMap => {
      this.category = paramsMap['params']['category']
      this.getMovies(this.category, String(this.page))
    })
  }
  getMovies(category: string, page: string) {
    this.movieService.getMovies(category, 'es-ES', page).subscribe(
      res => this.movies = res['results'],
      error => console.log(error)
    )
  }
  getNext() {
    this.page++;
    this.getMovies(this.category, String(this.page));
  }
  getPrevious() {
    this.page--;
    this.getMovies(this.category, String(this.page));
  }
  ngOnDestroy() {
    this.paramSubcription.unsubscribe()
  }
}
