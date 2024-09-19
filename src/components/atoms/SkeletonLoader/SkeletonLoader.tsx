import { range } from 'lodash';
import style from "./SkeletonLoader.module.scss";

type SkeletonLoaderProps = {
  width?: string | number;
  height?: string | number;
  repeat?: number;
}

const SkeletonLoader = ({ width="100%", height="100%", repeat=6 }: SkeletonLoaderProps) => {
  return (
    repeat ? (
      range(0, repeat)?.map(i => (
        <div key={i + "key"} className={style.wrap} style={{ width: width, height: height }}></div>
      ))
    ) : (
      <div className={style.wrap} style={{ width: width, height: height }}></div>
    )
  )
}

export default SkeletonLoader;