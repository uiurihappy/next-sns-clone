'use client';

import style from '@/app/(afterLogin)/messages/message.module.css';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const user = {
    id: 'hero',
    nickname: '영웅',
    /* 대문자로 하는 이유
     서버 측에서 join한 컬럼에 대해서는 대문자로 오기 때문에 대문자로 처리 (prisma에서 그렇다고 함 ㅇㅇ)
    */
    Messages: [
      { roomId: 123, content: '안녕하세요.', createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss') },
      { roomId: 123, content: '안녕히가세요.', createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss') },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.roomUserImage}>
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          {/* bold */}
          <b>{user.nickname}</b>
          {/* Non-breaking Space, 줄바꿈을 일으키지 않는 공백 */}
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span className={style.postDate}>{dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}</span>
        </div>
        <div className={style.roomLastChat}>
          {/* 마지막 index를 가져오기 용이하다. */}
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
