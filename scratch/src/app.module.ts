import { Module } from "@nestjs/common"; // 필요한 임포트의 95%
import { AppController } from "./app.controller";

@Module({
    // 설정 옵션 또는 객체를 넣어줌
    controllers: [AppController] // 애플리케이션에 있는 모든 컨트롤러들을 나열 - Nest가 인스턴스들을 생성함. 스프링 빈과 유사
})
export class AppModule {

}
