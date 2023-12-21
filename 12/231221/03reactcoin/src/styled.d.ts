import "styled-components";

//타입정의할때 선언
//정의합니다 모듈을 이걸 어떻게?
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
