import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private client: HttpClient) { }

  searchMovies(title) {
    return this.client.get(`http://www.omdbapi.com/?apikey=b0c63502&s=${title.value}`)
  }

  getMovie(id) {
    return this.client.get(`http://www.omdbapi.com/?apikey=b0c63502&i=${id}`)
  }
  
}
