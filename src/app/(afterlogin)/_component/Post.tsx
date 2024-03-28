import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterlogin)/_component/ActionButtons';
import PostArticle from '@/app/(afterlogin)/_component/PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';
dayjs.locale('ko');

// 상대 시간으로 fromNow와 같은 함수를 사용할 수 있다.
dayjs.extend(relativeTime);

type Props = {
  noImage?: Boolean;
};

export default function Post({ noImage }: Props) {
  // 서버에서 받아올 데이터
  const target = {
    postId: 1,
    User: {
      id: 'ybcha',
      nickname: 'Charlie',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    const numImages = Math.floor(Math.random() * 4) + 1; // 1부터 4까지의 무작위 정수
    for (let i = 0; i < numImages; i++) {
      target.Images.push({
        imageId: i + 1,
        link: faker.image.urlLoremFlickr(),
      });
    }
  }

  return (
    // 시맨틱 태그
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
