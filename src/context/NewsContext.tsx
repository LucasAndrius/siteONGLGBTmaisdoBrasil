import { createContext, useState, ReactNode, useEffect } from "react";
// import { AxiosResponse } from "axios";

interface NewsData {
  cover: String;
  medias: {
    url: String;
    caption: String;
    size: "small" | "medium" | "large";
  };
  title: String;
  abstract: String;
  author: String;
  date: String;
  text: {
    paragraph: String;
    content: String;
  };
  tags: String[];
}

interface NewsContextData {
  newsInformations: NewsData;
}

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsContext = createContext({} as NewsContextData);

export function NewsProvider({ children }: NewsProviderProps) {
  const [newsInformations, setNewsInformations] = useState<NewsData>(Object);

  const axios = require("axios").default;

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get("https://localhost:3000/api/noticias");
      setNewsInformations(resp.data);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NewsContext.Provider value={{ newsInformations }}>
      {children}
    </NewsContext.Provider>
  );
}
