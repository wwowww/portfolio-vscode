import axios from "axios";
const jsonUrl = "../../lib/api/projectList.json";

export const fetchProjectData = async () => {
  const response = await axios.get(jsonUrl)
  return response.data.data
}