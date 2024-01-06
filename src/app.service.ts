import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationInterface } from 'configuration';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const test =
      this.configService.get<ConfigurationInterface<'http'>>('http')['host'];
    console.log(test);
    return 'test';
  }
}
