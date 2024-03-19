'use client';

import style from '../search.module.css';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Tab() {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  // 부모인 Search 페이지가 있다.
  // Search 페이지에서 props로 SearchParams를 받아오기에 그대로 탭에 넘겨줘도 되고,
  // 클라이언트 컴포넌트에서는 useSearchParams라는 Hook이 존재.
  const searchParams = useSearchParams();
  // 탭 별로 onClick
  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`);
  };
  const onClickNew = () => {
    setCurrent('new');
    // 추가로 f=live
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  );
}
