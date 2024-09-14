import { useBlogPost } from "lib/api/react-query/blog";

const blogList = () => {
  const { isLoading, error, data } = useBlogPost();

  return (
    <>{}</>
  )
}

export default blogList;