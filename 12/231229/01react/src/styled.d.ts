import "styled-components";

//선언한다 모듈을 "이거"
//defaultTheme에 타입정의
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
