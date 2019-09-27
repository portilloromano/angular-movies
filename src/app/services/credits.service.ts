import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  constructor(public HttpClient: HttpClient) { }

  getCreditsById(id: string) {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7d9842d7377abc06a33ef03d1ee51800`);
  }
}
