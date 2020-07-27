//articlesList
import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./articleContent";

const Articles = () => (
  <>
    <h1 className="text-dark">Articles</h1>
    {articleContent.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`} className="text-dark">
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default Articles;
