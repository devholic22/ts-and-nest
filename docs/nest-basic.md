# NestJS 기본 개념 간단 학습 (코드 설명)
[참고 링크](https://www.daleseo.com/nestjs/)
### main.ts
```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();
```
* NestJS 애플리케이션이 시작되는 진입 지점
* 자바에서의 `MainApplication.java`와 같다.

### 모듈 (Module)
```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
```
* 위의 `main.ts`에서 임포트 한 `AppModule`이 모듈의 예
* 하나의 NestJS 애플리케이션은 보통 여러 개의 모듈로 이루어짐 - 기능 단위로 애플리케이션을 쪼개놓은 단위
* `@AAA`: 데코레이터
  * 자바에서의 어노테이션과 유사
* `imports`: 해당 모듈이 의존하고 있는 다른 모듈을 나열
  * 모듈 간의 의존 관계를 명시
  * 프로젝트 규모가 커질 때 다른 모듈을 작성한 후 AppModule이 불러올 수 있도록 imports에 기입
* `controllers`: HTTP 요청을 받아서 응답을 보내는 컨트롤러 클래스 나열
* `providers`: 컨트롤러가 사용하는 다양한 일반 클래스 (주로 서비스 클래스)를 나열

### 컨트롤러 (Controller)
```ts
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
```
* 클래스 위에 `@Controller()` 데코레이터를 호출하면 NestJS가 해당 클래스를 컨트롤러로 인식
  * `@Get()`, `@Post()`, `@Delete()`와 같은 HTTP method에 해당하는 데코레이터 삽입
* `@Controller("aaa")`는 스프링으로 치면 `@RequestMapping("/aaa")`와 같음 - 클래스 단위의 URL 매핑
* `@Get("bbb")`는 하위 URL 경로를 의미

### 서비스 (Service)
```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}
```
* `@Injectable()`: NestJS가 인스턴스를 생성하여 다른 클래스에 생성자를 통해서 주입을 함
  * 스프링의 `@Autowired`와 유사
  * AppModule의 `@Module()`에 있는 providers에 AppService 클래스를 명시해줬기 때문에 가능
* 컨트롤러의 역할과 서비스의 역할을 분리함으로써 유지보수가 용이한 애플리케이션 개발 가능
