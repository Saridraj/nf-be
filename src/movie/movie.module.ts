import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule,  ConfigModule.forRoot({ isGlobal: true})],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
