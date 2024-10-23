import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/hello')
  ping(): string {
    return 'world!';
  }
}
