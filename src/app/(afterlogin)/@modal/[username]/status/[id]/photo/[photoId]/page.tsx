import ActionButtons from '@/app/(afterlogin)/_component/ActionButtons';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';
import { faker } from '@faker-js/faker';
import Post from '@/app/(afterlogin)/_component/Post';
import CommentForm from '@/app/(afterlogin)/[username]/status/[id]/_component/CommentForm';
import style from './photoModal.module.css';
export default function Default() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      {/* flex direction row */}
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div className={style.image} style={{ backgroundImage: `url(${photo.link})` }} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
