import { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = { children: ReactNode; modal: ReactNode };

// 서버에서 돌아가기에 async 즉, 비동기로도 사용이 가능하다.
export default async function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3001일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3001/i/flow/login 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
