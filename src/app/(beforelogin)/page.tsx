import Image from "next/image";
import styles from "./page.module.css"; // css module 사용
import ybchaLogo from "../../../public/ybchaLogo.png";
/* 많이 사용하는 거
- tailwind -> 호불호 심함, 가독성이 떨어진대
- Styled Component -> Server Component SSR
- Sass
- CSS module
- vanilla extract -> Windows와 문제
*/
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={ybchaLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signUp}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
