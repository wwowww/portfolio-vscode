const jsonUrl = "../../iib/api/projectList.json";
import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get(jsonUrl)
  return response.data.data
}