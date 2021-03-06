import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-by-actor',
  templateUrl: './movies-by-actor.component.html',
  styleUrls: ['./movies-by-actor.component.scss']
})
export class MoviesByActorComponent implements OnInit {
  private movies: object[];
  private id: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieByActorId(this.id).subscribe(
      res => this.movies = res['cast'],
      error => console.log(error)
    );
  }

}
