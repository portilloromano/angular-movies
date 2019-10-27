import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/Movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {
  private movies: Movie;
  private currentPage: number = 1;
  private totalItems: number;
  private maxSize: number = 5;
  private itemsPerPage: number = 20;
  private query: string = '';
  private paramSubcription: Subscription;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubcription = this.route.params.subscribe(params => {
      this.query = params['query'];
      this.currentPage = 1;
      this.getMovies(this.query, String(this.currentPage));
    });
  }

  getMovies(query: string, currentPage: string) {
    this.moviesService.getMoviesByQuery(query, currentPage).subscribe(
      res => {
        this.movies = res['results'];
        this.totalItems = Number(res['total_results']);
      },
      error => console.log(error)
    )
  }

  ngOnDestroy() {
    this.paramSubcription.unsubscribe();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getMovies(this.query, String(this.currentPage));
  }
}
