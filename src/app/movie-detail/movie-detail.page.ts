import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false,
})
export class MovieDetailPage implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieInfoService: MovieInfoService
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    // Route params are strings by default, so we convert them to a number before lookup.
    this.movie = this.movieInfoService.getMovieById(movieId);
  }
}
