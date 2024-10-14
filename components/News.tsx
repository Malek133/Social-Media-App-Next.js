'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Article {
  source: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export default function News() {
  const [news, setNews] = useState<Article[]>([]);
  const [articleNum, setArticleNum] = useState<number>(3);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4">What s happening</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
              </div>
              <Image
                src={article.urlToImage}
                width={70}
                height={70}
                alt={article.title}
                className="rounded-xl"
              />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm"
      >
        Load more
      </button>
    </div>
  );
}
