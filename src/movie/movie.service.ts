import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  async getPopularMovies(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers: { Authorization: `Bearer ${process.env.MOVIE_API_KEY}` },
      }),
    );
    const popularMovies = response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      originalTitle: movie.original_title,
      posterPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.poster_path,
      backdropPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.backdrop_path,
      releaseDate: movie.release_date,
    }));
    return popularMovies;
  }

  async getTopRateMovies(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get( 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
        headers: { Authorization: `Bearer ${process.env.MOVIE_API_KEY}` },
      }),
    );
    const popularMovies = response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      originalTitle: movie.original_title,
      posterPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.poster_path,
      backdropPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.backdrop_path,
      releaseDate: movie.release_date,
    }));
    return popularMovies;
  }

  async getUpcomingMovies(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get( 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
        headers: { Authorization: `Bearer ${process.env.MOVIE_API_KEY}` },
      }),
    );
    const popularMovies = response.data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      originalTitle: movie.original_title,
      posterPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.poster_path,
      backdropPath:
        `${'https://image.tmdb.org/t/p/original'}` + movie.backdrop_path,
      releaseDate: movie.release_date,
    }));
    return popularMovies;
  }


 
}
