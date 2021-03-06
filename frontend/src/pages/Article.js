import React from "react";
import articleContent from "./articleContent";
import ArticlesList from "../components/articlesList";
import NotFound from "./notFound";
const Article = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles: </h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default Article;
