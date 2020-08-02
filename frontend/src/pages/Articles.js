//articlesList
import React from "react";
import articleContent from "./articleContent";
import ArticlesList from "../components/articlesList";

const Articles = () => (
  <>
    <h1 className="text-dark">Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default Articles;
