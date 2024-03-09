import Trend from '@/app/(afterlogin)/_component/Trend';
import style from './trendSection.module.css';

export default function TrendSection() {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
      </div>
    </div>
  );
}
