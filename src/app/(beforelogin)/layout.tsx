import { ReactNode } from "react";
import styles from '@/app/(beforelogin)/_component/main.module.css'; // css module 사용

type Props = { children: ReactNode; modal: ReactNode };

// 서버에서 돌아가기에 async 즉, 비동기로도 사용이 가능하다.
export default async function Layout({ children, modal }: Props) {
  // modal은 @modal에서 실행되고,
  // children은 그 외, i, login, layout.tsx, page.tsx 실행된다.
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3000일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
