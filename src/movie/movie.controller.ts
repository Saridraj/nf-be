import { Controller, Get,Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieApiService: MovieService) {}

  @Get('popular')
  async getPopularMovies() {
    return this.movieApiService.getPopularMovies();
  }

  @Get('topRate')
  async getTopRateMovies() {
    return this.movieApiService.getTopRateMovies();
  }

  @Get('upcoming')
  async getUpcomingMovies() {
    return this.movieApiService.getUpcomingMovies();
  }
}
