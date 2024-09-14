import axios from "axios";
const jsonUrl = "../../lib/api/projectList.json";

export const fetchProjectData = async () => {
  const response = await axios.get(jsonUrl)
  return response.data.data
}

export const fetchBlogPostData = async () => {
  const response = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://api.velog.io/rss/wwowww")
  return response.data.items
}