import { useQuery } from "@tanstack/react-query";
import { fetchProjectData } from "../index";

const useProjectPost = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['project'],
    queryFn: fetchProjectData
  })
  
  return { isLoading, error, data }
}

export { useProjectPost }