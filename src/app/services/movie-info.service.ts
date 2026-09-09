import { Injectable } from '@angular/core';
import { Movie } from '../attributes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Sci-Fi / Thriller',
      banner: 'assets/movies/Avengers Endgame.jpg',
      synopsis:
        'A skilled thief with a talent for entering people\'s dreams is given one final mission that could rewrite his future. As layers of reality begin to collapse, he must build a plan that challenges both his mind and his loyalties.',
      gallery: [
        'assets/movies/Avengers Endgame.jpg',
        'assets/movies/Avengers Endgame.jpg',
        'assets/movies/Avengers Endgame.jpg'
      ]
    },
    {
      id: 2,
      title: 'Avengers: Infinity War',
      genre: 'Action / Crime',
      banner: 'assets/movies/Avengers Infinity War.jpg',
      synopsis:
        'Batman faces his most dangerous enemy yet when Gotham\'s criminal underworld is pushed into chaos by a masked mastermind. As the city teeters on the edge of collapse, justice and fear become two very different weapons.',
      gallery: [
        'assets/movies/Avengers Infinity War.jpg',
        'assets/movies/Avengers Infinity War.jpg',
        'assets/movies/Avengers Infinity War.jpg'
      ]
    },
    {
      id: 3,
      title: 'The Avengers',
      genre: 'Sci-Fi / Drama',
      banner: 'assets/movies/Avengers.jpg',
      synopsis:
        'A former pilot joins a desperate mission that could save humanity from extinction as Earth slowly becomes unlivable. Along the way, he must confront loss, hope, and the complicated meaning of home.',
      gallery: [
        'assets/movies/Avengers.jpg',
        'assets/movies/Avengers.jpg',
        'assets/movies/Avengers.jpg'
      ]
    },
    {
      id: 4,
      title: 'Loki',
      genre: 'Action / Adventure',
      banner: 'assets/movies/Loki.jpg',
      synopsis:
        'When Peter Parker\'s identity is exposed, his life spirals into a crisis that brings the multiverse crashing into his world. He must risk everything to protect the ones he loves while facing decisions that could change his future forever.',
      gallery: [
        'assets/movies/Loki.jpg',
        'assets/movies/Loki.jpg',
        'assets/movies/Loki.jpg'
      ]
    },
    {
      id: 5,
      title: 'Avengers: Endgame',
      genre: 'Action / Sci-Fi',
      banner: 'assets/movies/Black Panther.jpg',
      synopsis:
        'The surviving heroes attempt one final chance to reverse the damage caused by an overwhelming cosmic threat. What follows is a high-stakes battle against time, sacrifice, and the cost of saving the universe.',
      gallery: [
        'assets/movies/Black Panther.jpg',
        'assets/movies/Black Panther.jpg',
        'assets/movies/Black Panther.jpg'
      ]
    },
    {
      id: 6,
      title: 'Deadpool & Wolverine',
      genre: 'Sci-Fi / Action',
      banner: 'assets/movies/Deadpool and Wolverine.jpg',
      synopsis:
        'A hacker discovers the unsettling truth that reality itself is a carefully constructed simulation. As he begins to understand his role in the system, he must choose whether to challenge the world he thought was real.',
      gallery: [
        'assets/movies/Deadpool and Wolverine.jpg',
        'assets/movies/Deadpool and Wolverine.jpg',
        'assets/movies/Deadpool and Wolverine.jpg'
      ]
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  searchMovies(term: string): Movie[] {
    const normalizedTerm = term.trim().toLowerCase();

    if (!normalizedTerm) {
      return this.movies;
    }

    return this.movies.filter(movie => movie.title.toLowerCase().includes(normalizedTerm));
  }
}
