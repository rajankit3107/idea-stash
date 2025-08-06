import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URl } from "../config";

export function useContent() {
    const [content, setContent] = useState([]);

    function refresh() {
        axios.get(`${BACKEND_URl}/api/v1/content`, {
            headers : {
                "Authorization" : localStorage.getItem("token") 
            }
        })
        .then((response) => {
            setContent(response.data.content)
        })
    }
    useEffect(() => {
      refresh();
      let interval = setInterval(() => {
        refresh()
       }, 10*1000)

       return () => {
        clearInterval(interval)
       }
    },[])

    return {content, refresh}
}