import { Controller, Module, Get } from "@nestjs/common";

@Controller() // 데코레이터: 애플리케이션 안에서 컨트롤러 역할을 할 클래스를 만든다고 명시
class AppController {
    @Get() // 스프링의 루트 GET 요청과 같음
    getRootRoute() {
        return 'hi there!';
    }
}
