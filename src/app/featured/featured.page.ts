import { Component, OnInit } from '@angular/core';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
  standalone: false,
})
export class FeaturedPage implements OnInit {
  movies: Movie[] = [];

  constructor(private movieInfoService: MovieInfoService) {}

  ngOnInit(): void {
    this.movies = this.movieInfoService.getMovies();
  }
}
