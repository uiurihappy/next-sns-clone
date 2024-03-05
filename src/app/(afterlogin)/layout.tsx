import { ReactNode } from 'react';
import style from '@/app/(afterlogin)/layout.module.css';
import ybchaLogo from '../../../public/ybchaLogo.png';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from '@/app/(afterlogin)/_component/NavMenu';
import LogoutButton from '@/app/(afterlogin)/_component/LogoutButton';
type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            {/* 실제로는 Link가 a 태그이기 때문에 */}
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={ybchaLogo} alt="ybcha.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            {/* 
              로그아웃 버튼을 가장 밑으로 보내기 위해서는 가장 쉬운 방법으로 flex를 column으로 지정해준다.
              부모를 display: flex, flex-direction: column;
              자식을 flex: 1로 지정
            */}
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          {/* main과 rightSection에 대한 간격이 존재*/}
          <section className={style.rightSection}>
            {/* 검색 창 */}
            <form className={style.search}>
              <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </g>
              </svg>
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
