import { useQuery } from "@tanstack/react-query";
import { fetchBlogPostData } from "../index";

const useBlogPost = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogPostData
  })

  return { isLoading, error, data }
}

export { useBlogPost }