import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import Tab from '@/app/(afterlogin)/home/_component/Tab';
import PostForm from '@/app/(afterlogin)/home/_component/PostForm';
import Post from '@/app/(afterlogin)/_component/Post';

export default function Home() {
  return (
    /* 
      main 태그와 TabProvider의 위치는 바껴도 된다. 그러나 왜?
      Context 사용 여부가 달라진다.
    */
    <main className={style.main}>
      {/* 탭의 상태가 아래 모든 Post, PostFrom에 영향을 끼치고 싶어한다. (공통 분모) */}
      <TabProvider>
        <Tab />
        {/* Form은 Client Component가 된다. 왜냐, EventListener들이 엄청 붙을 예정... */}
        {/* Server Action을 통해서 데이터를 보내는 방법으로 개선 예정 */}
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
