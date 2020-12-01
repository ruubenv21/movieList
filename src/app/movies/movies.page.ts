import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  res: any;
  movies: Object[];
  correcto: string;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  search(title) {
    this.movieService.searchMovies(title).subscribe(data => {
      this.res = data
      this.movies = this.res.Search
      this.correcto = this.res.Response
    })
  }

}
