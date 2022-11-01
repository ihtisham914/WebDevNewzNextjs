import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <Head>
        <title>About</title>
        <meta name="description" content="programming, web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-1 max-w-5xl items-center justify-center">
        <div>
          <h1 className="text-center text-4xl font-bold text-gray-700">
            About Us
          </h1>
          <p className="text-2xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            pariatur, provident quisquam voluptates eaque accusamus odit ducimus
            modi deleniti at a quae, nesciunt ea minus quo sapiente deserunt,
            voluptas dolor? Nihil perferendis animi ducimus ratione incidunt
            debitis harum mollitia sunt aliquid. Magnam, vitae nostrum laborum
            quis dolorum perferendis quo dolor architecto recusandae numquam,
            accusantium voluptate nihil harum, qui obcaecati eius? Numquam, enim
            in quasi soluta delectus voluptatibus eius! Possimus dolore
            doloribus mollitia amet dolorum. Quasi accusantium laborum sapiente
            fuga maiores doloribus tempora, pariatur voluptatum blanditiis
            deserunt eligendi ex at quia!
          </p>
        </div>
      </main>
    </div>
  );
};

export default about;
