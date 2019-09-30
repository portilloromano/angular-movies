import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private id: string;
  private movie: object;
  private trailer: string;
  private backdrop_path: any;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.id).subscribe(
      res => {
        this.movie = res;
        this.backdrop_path = (String('https://image.tmdb.org/t/p/original' + this.movie.backdrop_path))
      },
      error => console.log(error));
    this.movieService.getVideoByMovieId(this.id).subscribe(
      (res: any) => {
        this.trailer = "https://www.youtube.com/embed/" + res['results'][0].key;
      },
      error => console.log(error)
    );
  }
}
