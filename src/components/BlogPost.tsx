// pages/index.js

import { client } from '../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const queryPost = `*[_type == "blogPost"]{
    title,
    body,
    "author": author,
    _createdAt,
    "slug":slug.current,
    "imageUrl": image.asset->url
  }`;

  const posts = await client.fetch(queryPost);

  return (
    <div className="px-4 sm:px-12 lg:px-28 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="flex flex-wrap -mx-4">
        {posts.map((post:any, index:number) => (
          <div key={post.slug} className="w-full sm:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="rounded-lg shadow-md border border-white overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  Published on: {new Date(post._createdAt).toLocaleDateString()}
                </p>
                <p className=" mb-4">
                  {(post.body[0]?.children[0]?.text).slice(0, 100)}
                </p>
                <p className="text-sm mb-4">By: {post.author}</p>
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                <Link href={`/posts/${post.slug}`}>
                  <button className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
