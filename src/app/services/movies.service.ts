import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(public HttpClient: HttpClient) { }

  getMoviesByCategory(category: string, page: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${category}?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}&page=${page}`);
  }
  getMovieById(id: string, language: string = 'en-EN') {
    return this.HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7d9842d7377abc06a33ef03d1ee51800&language=${language}`);
  }
}
