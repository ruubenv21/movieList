import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie: Object

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    await this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get("IdMovie")
      this.moviesService.getMovie(id).subscribe(data => {
        this.movie = data
        console.log(this.movie)
      })
    })
  }

}
