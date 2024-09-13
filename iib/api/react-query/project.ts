import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../api/index";

const useAPI = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchData,
  })
  
  return { isLoading, error, data }
}

export { useAPI }