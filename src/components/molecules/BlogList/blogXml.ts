import { useState } from "react";

export const list = window.onload = () => {
  const [post, setPost] = useState(null);

  
  const xhr = new XMLHttpRequest();

  const method = "GET";
  const url = "https://api.velog.io/rss/wow";

  xhr.open(method, url, true);
  xhr.withCredentials = true;
  xhr.onload = () => {
    let data = xhr.response;
    let xmlDocs = new DOMParser().parseFromString(data, "text/xml");

    const items:any = xmlDocs.getElementsByTagName("item");

    for(let item of items) {
      for (let childrenNode of item.children) {
        console.log(childrenNode.tagName);
        console.log(childrenNode.textContent);
      }
    }
  }

  xhr.send();
}