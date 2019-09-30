import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private itemsPerSlide: number = 3;
  private movies: object[];
  private slides: object[];

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getMoviesByCategory('upcoming', '1').subscribe(
      res => {
        this.movies = res['results'];
        this.loadCarouselImages();
      },
      error => console.log(error)
    );
  }

  loadCarouselImages() {
    this.movies.map(movie => {
      this.slides.push({image: 'https://image.tmdb.org/t/p/w200'+movie.poster_path});
      console.log(this.slides);
    });
  }
}
