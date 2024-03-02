/* 많이 사용하는 거
- tailwind -> 호불호 심함, 가독성이 떨어진대
- Styled Component -> Server Component SSR
- Sass
- CSS module
- vanilla extract -> Windows와 문제
*/
import Main from './_component/Main';

export default function Home() {
  // 실제로는 메인 페이지에 존재하지만, 패러렐 라우트가 인터셉팅을 하여 처리
  return <Main />;
}
