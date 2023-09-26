import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(appService, 'in app controller')
  }

  @Get()
  getHello(): string {
    console.log('in getHello')
    return this.appService.getHello()
  }
}
