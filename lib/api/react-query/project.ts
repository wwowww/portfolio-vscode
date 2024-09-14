import { useQuery } from "@tanstack/react-query";
import { fetchProjectData } from "../index";

const useAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['json'],
    queryFn: fetchProjectData
  })
  
  return { isLoading, error, data }
}

export { useAPI }