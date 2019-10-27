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
  private currentPage: number = 1;
  private paramSubcription: Subscription;
  private category: string;
  private totalItems: number;
  private maxSize: number = 5;
  private itemsPerPage: number = 20;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramSubcription = this.route.params.subscribe(params => {
      this.category = params['category'];
      this.currentPage = 1;
      this.getMovies(this.category, String(this.currentPage));
    });
  }
  getMovies(category: string, currentPage: string) {
    this.moviesService.getMoviesByCategory(category, currentPage).subscribe(
      res => {
        this.movies = res['results'];
        this.totalItems = Number(res['total_results']);
      },
      error => console.log(error)
    );
  }
  
  ngOnDestroy() {
    this.paramSubcription.unsubscribe();
  }
  
  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getMovies(this.category, String(this.currentPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
