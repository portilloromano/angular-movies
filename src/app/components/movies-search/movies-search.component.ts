import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {
  private movies: Movie;
  private page: number = 1;
  private totalItems: number;
  private maxSize: number = 5;
  private itemsPerPage: number = 20;
  private query: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.getMovies(this.query, String(this.page));
  }
  getMovies(query: string, page: string) {
    this.moviesService.getMoviesByQuery(query, page).subscribe(
      res => {
        this.movies = res['results'];
        this.totalItems = Number(res['total_results']);
      },
      error => console.log(error)
    )
  }
  pageChanged(event: any): void {
    this.page = event.page;
    this.getMovies(this.query, String(this.page));
  }
}
