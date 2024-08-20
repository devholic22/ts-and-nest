import { NestFactory } from "@nestjs/core"; // 드물게 사용
import { AppModule } from "./app.module";

/*
@Controller() // 데코레이터: 애플리케이션 안에서 컨트롤러 역할을 할 클래스를 만든다고 명시
class AppController {
    @Get() // 스프링의 루트 GET 요청과 같음
    getRootRoute() {
        return 'hi there!';
    }
}
*/

/*
@Module({
    // 설정 옵션 또는 객체를 넣어줌
    controllers: [AppController] // 애플리케이션에 있는 모든 컨트롤러들을 나열 - Nest가 인스턴스들을 생성함. 스프링 빈과 유사
})
class AppModule {

}
*/

async function bootstrap() { // 일종의 규약으로 bootstrap이라고 명시
    const app = await NestFactory.create(AppModule); // Nest 애플리케이션 인스턴스
    await app.listen(3000);
}

bootstrap();
