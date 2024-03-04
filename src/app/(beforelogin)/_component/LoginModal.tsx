'use client';

import style from '@/app/(beforelogin)/_component/login.module.css';
/*
 useState는 클라이언트 컴포넌트에서만 동작되는데 서버 컴포넌트에서 사용되고 있다.
 현재 경로는 전부 서버 컴포넌트에 속해 있다.
 React 18 버전에서 새로 추가됐으며, Next.js 서버에서 돌아간다.
 즉, 아래와 같은 훅은 서버 컴포넌트이기에 사용이 안되었는데, "use client" 최상단에 작성하면
 클라이언트 컴포넌트로 전환된다.
*/
// 클라이언트에서 라우팅할 때만 인터셉트 라우팅이 적용된다.
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginModal() {
  // State
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const router = useRouter();
  const onSubmit = () => {};

  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input id="id" className={style.input} value={id} onChange={onChangeId} type="text" placeholder="" />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
