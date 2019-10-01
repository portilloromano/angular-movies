import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../models/Movie.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private itemsPerSlide: number = 3;
  private movies: Movie[];
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
      let imageUrl: string = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;
      console.log(imageUrl);
      // this.slides.push({ image: imageUrl });
      console.log(this.slides);
    });
  }
}
