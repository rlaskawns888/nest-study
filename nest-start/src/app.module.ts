import { Module, Global, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

//exception filter 
import { ExceptionController } from './exception-filters/exception.controller';
import { ExceptionService } from './exception-filters/exception.service';

//pipes
import { PipeController } from './pipe/pipe.controller';

//guards
import { GuardController } from './common/guards/guard.controller';

//interceptor
import { InterceptorTestController } from './intercetpor-test/interceptor.controller';

// @Global() : 모듈을 전역 범위로 만듬.
// . 전역 모듈은 일반적으로 루트 또는 코어 모듈에 의해 한 번만 등록되어야 함
@Module({
  imports: [CatsModule],
  controllers: [
    AppController, 
    ExceptionController, 
    PipeController, 
    GuardController, 
    InterceptorTestController
  ],
  providers: [AppService, ExceptionService],
  exports: [CatsModule] //export 사용 시, app.module.ts 모듈을 가져올 경우, CatsModule을 사용 가능.
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        
        //ex)
        .forRoutes(CatsController, GuardController)
        
        //ex1)
        // .forRoutes('/cats')

        //ex2)
        // .forRoutes(
        //   {path: '/cats', method: RequestMethod.GET},
        //   {path: '/cats', method: RequestMethod.POST}
        // )

        //ex3. 특정 경로 제외
        // .exclude(
        //     {path: '/cats', method: RequestMethod.GET},
        //     {path: '/cats', method: RequestMethod.POST},
        //     'cats/(.*)'
        // )
        // .forRoutes(CatsController)
  }
}

// 메서드 configure()는 다음을 사용하여 비동기식으로 만들 수 있습니다 
// async/await(예: 메서드 본문 await내에서 비동기 작업을 완료 할 수 있음 configure()).

