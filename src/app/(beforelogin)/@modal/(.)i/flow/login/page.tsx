"use client";
/*
 useState는 클라이언트 컴포넌트에서만 동작되는데 서버 컴포넌트에서 사용되고 있다.
 현재 경로는 전부 서버 컴포넌트에 속해 있다.
 React 18 버전에서 새로 추가됐으며, Next.js 서버에서 돌아간다.
 즉, 아래와 같은 훅은 서버 컴포넌트이기에 사용이 안되었는데, "use client" 최상단에 작성하면
 클라이언트 컴포넌트로 전환된다.
*/
// 클라이언트에서 라우팅할 때만 인터셉트 라우팅이 적용된다.

import { useRouter } from "next/navigation";

// 서버 컴포넌트는 클라이언트 컴포넌트를 import 해도 되지만, 반대로 클라이언트 컴포넌트가 서버 컴포넌트를 import 하면 안된다.
export default function Login() {
  const router = useRouter();
  /** push, replace 차이
   * push는
   * localhost:3000/login -> localhost:3000/i/flow/login
   * replace는
   * localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
   * 이렇게 리다이렉트는 동일하나 뒤로 갔을 시 push는 login으로 바로 이전 페이지(/login)를 간다.
   * 그러나 replace는 한 단계 더 뒤인 / 페이지로 이동한다.
   *
   * 이동 후 히스토리를 지워버린다
   */
  router.replace("/i/flow/login");
  return null;
}
