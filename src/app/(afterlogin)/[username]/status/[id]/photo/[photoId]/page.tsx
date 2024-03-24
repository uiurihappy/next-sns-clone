import Home from '@/app/(afterlogin)/home/page';
// 패러렐 라우팅으로 인터셉팅

type Props = {
  params: { username: string; id: string; photoId: string };
};
export default function Page({ params }: Props) {
  /*
    params.username // ybcha
    params.id // 1
    params.photoId // 1
  */
  return <Home />;
}
