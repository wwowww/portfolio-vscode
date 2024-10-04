import axios from "axios";

export const fetchProjectData = async () => {
  const response = await axios.get("https://raw.githubusercontent.com/wwowww/portfolio-vscode/refs/heads/main/lib/api/projectList.json")
  return response.data.data
}

export const fetchBlogPostData = async () => {
  const response = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://api.velog.io/rss/wwowww")
  return response.data.items
}