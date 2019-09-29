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
  public id: string;
  public movie: object;
  public trailers: object[];
  public firstTrailer: string;


  constructor(
    public movieService: MoviesService,
    public route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(this.id).subscribe(
      res => this.movie = res,
      error => console.log(error)
    );
    this.movieService.getVideoByMovieId(this.id).subscribe(
      res => this.trailers = res['results'],
      error => console.log(error),
      () => console.log(this.id, this.trailers.slice(0,1).key)
    );
  }
}
