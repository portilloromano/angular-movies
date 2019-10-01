import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private HttpClient: HttpClient) { }

  getMoviesByCategory(category: string, page: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${category}?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}&page=${page}`);
  }
  getMovieById(id: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}`);
  }
  getMovieByActorId(id: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}`);
  }
  getVideoByMovieId(id: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}`);
  }
  getMoviesByQuery(query: string, page: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}&query=${query}&page=${page}&include_adult=false`);
  }
}
