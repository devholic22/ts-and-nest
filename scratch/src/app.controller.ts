import { Controller, Get } from "@nestjs/common"; // 필요한 임포트의 95%

@Controller('/app') // 데코레이터: 애플리케이션 안에서 컨트롤러 역할을 할 클래스를 만든다고 명시
export class AppController { // 파일이 분리될 시 export 필요 - 다른 파일에서 액세스
    @Get('/hello') // 스프링의 루트 GET 요청과 같음 - 이제 경로 달라졌으므로 /app/hello로 접근해야 함. 루트 페이지 요청은 404
    getRootRoute() {
        return 'hi there!';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}
