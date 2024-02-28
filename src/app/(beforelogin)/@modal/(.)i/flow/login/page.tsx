/*
 useState는 클라이언트 컴포넌트에서만 동작되는데 서버 컴포넌트에서 사용되고 있다.
 현재 경로는 전부 서버 컴포넌트에 속해 있다.
 React 18 버전에서 새로 추가됐으며, Next.js 서버에서 돌아간다.
 즉, 아래와 같은 훅은 서버 컴포넌트이기에 사용이 안되었는데, "use client" 최상단에 작성하면
 클라이언트 컴포넌트로 전환된다.
*/
// 클라이언트에서 라우팅할 때만 인터셉트 라우팅이 적용된다.
import { useState } from "react";

export default function LoginModal() {
  return <LoginModal />;
}
