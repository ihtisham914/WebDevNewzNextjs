import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div className="flex items-center justify-center mt-20 font-bold text-4xl">
      <Head>
        <title>WebDev</title>
        <meta name="description" content="programming, web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
