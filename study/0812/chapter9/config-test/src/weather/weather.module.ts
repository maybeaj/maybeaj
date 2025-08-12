import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [WeatherController]
})
export class WeatherModule {}
