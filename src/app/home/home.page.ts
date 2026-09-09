import { Component, OnInit } from '@angular/core';
import { Movie } from '../attributes/movie';
import { MovieInfoService } from '../services/movie-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  searchTerm = '';
  movies: Movie[] = [];

  constructor(private movieInfoService: MovieInfoService) {}

  ngOnInit(): void {
    this.movies = this.movieInfoService.getMovies();
  }

  onSearchInput(): void {
    this.movies = this.movieInfoService.searchMovies(this.searchTerm);
  }
}
