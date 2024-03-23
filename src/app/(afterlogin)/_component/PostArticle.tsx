'use client';

import { ReactNode } from 'react';
import style from './post.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: string;
    Images: any[]; // any가 어느 타입이든 다 되는 타입이지만, 본인은 이렇게 할거면 Typescript 안씀
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    // onClickCapture: 이벤트를 캡처할 수 있다.
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
