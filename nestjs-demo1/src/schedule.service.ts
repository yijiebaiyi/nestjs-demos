import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ScheduleService implements OnModuleInit {
  async onModuleInit() {
    this.testSchedule();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  // @Cron(CronExpression.EVERY_SECOND)
  @Cron('0 10 0 * * *')
  testSchedule() {
    console.log("当前时间： %s", Date.now());
  }
}
