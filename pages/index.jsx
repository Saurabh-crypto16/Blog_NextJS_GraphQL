import Head from "next/head";
import Image from "next/image";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services/";

// const posts = [
//   { title: "React Testing", excerpt: "Learn testing" },
//   { title: "React Testing 1", excerpt: "Learn testing 1" },
// ];

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, idx) => (
            <PostCard key={idx} post={post.node} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log(posts);
  return {
    props: { posts },
  };
}
