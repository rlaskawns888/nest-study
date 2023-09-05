import { Module, Global } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';

// @Global() : 모듈을 전역 범위로 만듬.
// . 전역 모듈은 일반적으로 루트 또는 코어 모듈에 의해 한 번만 등록되어야 함.

@Global()
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [CatsModule] //export 사용 시, app.module.ts 모듈을 가져올 경우, CatsModule을 사용 가능.
})
export class AppModule {}
