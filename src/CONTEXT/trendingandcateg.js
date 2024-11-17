import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


export const TrendingAndCategContext = createContext("");

function TrendingAndCategProvider(props) {

  const [news, setNews] = useState([]);
  useEffect(() => {
  

    const fetchNewss = async () => {
      try {
        const localStorageDataNews = localStorage.getItem("news");
        
        if (localStorageDataNews) {
          setNews(JSON.parse(localStorageDataNews));
        } else {
          const { data } = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-10-08&sortBy=publishedAt&apiKey=829ea3fb19124ee7a7bb6ff81c43ff09");
          console.log("News Data:", data);
          setNews(data.articles);
          localStorage.setItem("news", JSON.stringify(data.articles));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    
    
   
    fetchNewss();
  }, []);

  return (
    <TrendingAndCategContext.Provider value={{  news}}>
      {props.children}
    </TrendingAndCategContext.Provider>
  );
}

export default TrendingAndCategProvider;
