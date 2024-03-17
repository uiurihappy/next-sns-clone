import style from './profile.module.css';
import BackButton from '@/app/(afterlogin)/_component/BackButton';
import Post from '@/app/(afterlogin)/_component/Post';

export default function Profile() {
  
  const user = {
    id: 'ybcha',
    nickname: 'Charlie',
    image: '/ybchaLogo.png',
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
