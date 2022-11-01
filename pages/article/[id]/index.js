import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div className="grid grid-col-1 items-center justify-center max-w-100% ">
      <div className="font-sans max-w-4xl font-serif m-4 p-4 rounded-2xl align-left border-2 shadow-md  border-slate-200">
        <h3 className="mb-4 text-3xl font-semibold">{article.title}</h3>
        <p className="m-0 text-2xl  leading-6 font-normal">{article.body}</p>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="text-2xl w-40 mt-12 ml-2 text-center p-3 bg-black text-white rounded-md font-medium hover:bg-gray-800  transition-all"
          href={"/"}
        >
          &larr; Go back
        </Link>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  console.log(params);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return {
    props: {
      article: res.data,
    },
  };
};
export default article;
