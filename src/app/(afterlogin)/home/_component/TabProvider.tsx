// 상태 관리를 위한 context API 작성
'use client';

import { ReactNode, createContext, useState } from 'react';

type Props = { children: ReactNode };

export const TabContext = createContext({ tab: 'rec', setTab: (value: 'rec' | 'fol') => {} });
export default function TabProvider({ children }: Props) {
  // 상태, default는 추천
  const [tab, setTab] = useState('rec');

  // 최적화에 어긋남
  // 초반부터 지나치게 최적화할 필요는 없음
  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
