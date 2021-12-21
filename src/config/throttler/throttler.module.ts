import { APP_GUARD } from '@nestjs/core';
import { Module, UseGuards } from '@nestjs/common';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ThrottlerBehindProxyGuard } from './throttler.guard';

@UseGuards(ThrottlerBehindProxyGuard)
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class GlobalThrottlerModule {}
