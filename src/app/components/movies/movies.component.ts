import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/Movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private movies: Movie[];
  private page: number = 1;
  private paramSubcription: Subscription;
  private category: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubcription = this.route.params.subscribe(params => {
      this.category = params['category'];
      this.getMovies(this.category, String(this.page))
    });
  }
  getMovies(category: string, page: string) {
    this.moviesService.getMoviesByCategory(category, page).subscribe(
      res => this.movies = res['results'],
      error => console.log(error)
    );
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
    this.paramSubcription.unsubscribe();
  }
}
