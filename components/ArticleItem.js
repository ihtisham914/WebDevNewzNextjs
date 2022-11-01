import React from "react";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className="font-sans m-4 p-4 rounded-2xl align-left border-2 shadow-md cursor-pointer border-slate-200  transition hover:border-sky-500 hover:text-sky-500">
        <h3 className="mb-4 text-3xl font-semibold">{article.title} &rarr;</h3>
        <p className="m-0 text-2xl  leading-6 font-normal">{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
