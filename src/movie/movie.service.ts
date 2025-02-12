import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MovieService {
  private readonly apiUrl = 'https://api.example.com/movies';
  private readonly apiKey = 'your-api-key';
  constructor(private readonly httpService: HttpService) {}


}
