import { useBlogPost } from "lib/api/react-query/blog";
import style from "./BlogList.module.scss";
import { useCallback } from "react";
import Typography from "@/components/atoms/Typography/Typography";

const blogList = () => {
  const { isLoading, error, data } = useBlogPost();

  const stringConversion = useCallback((text: string) => {
    const tagRegex = /(<([^>]+)>)/gi;
    const emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    const maxLength = 140;
    
    return text.replace(tagRegex, "").replace(emojiRegex, "").substr(0, maxLength).trimStart();
  },[data]);

  const dateFormat = useCallback((timeStamp: Date) => {
    const date = new Date(timeStamp);
    const format = date.getFullYear() + "년 " + (date.getMonth()+1) + "월 " + date.getDate() + "일"

    return format;
  }, [data]);

  return (
    <ul className={style.listWrap}>
      {isLoading && <>Loading ...</>}
      {error && <p>에러가 발생했습니다! 잠시후 다시 시도해주세요.</p>}
      {data && data.map((item) => (
        <li key={item.pubDate} className={style.list}>
          <a href={item.link} target="_blank">
            <Typography Tag="h3" className="title-20-150-400">
              {item.title}
            </Typography>
            <Typography Tag="p" className="body-14-150-400">
              {stringConversion(item.description)}
            </Typography>
            <span className={style.timeStamp}>
              {dateFormat(item.pubDate)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default blogList;