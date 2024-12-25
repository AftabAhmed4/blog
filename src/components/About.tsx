import aboutImage from '../../public/about me.webp'
import aboutProject from '../../public/project.webp'
import Image from 'next/image';

export default function About() {
  return (
    <div>
<section className="w-full mx-auto py-10">


  <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
    {/* <!-- Col - 2 --> */}
    <div
      className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
   
      <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={aboutImage} alt="billboard image" />

      <div className="md:w-[50%] w-full md:p-4 p-0 rounded-md">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="text-md mt-4">Welcome to Blogify, your trusted destination for exploring the latest advancements in technology. From the transformative potential of Artificial Intelligence to the groundbreaking possibilities of Quantum Computing and the ever-evolving world of Cloud Computing, we strive to deliver insightful, engaging, and accessible content for tech enthusiasts and professionals alike. At Blogify, we simplify complex innovations, spark curiosity, and empower our readers to stay ahead in the rapidly changing tech landscape. Join us as we uncover the technologies shaping the future and redefine what’s possible in the digital age.</p>
      </div>

    </div>
    {/* <!-- Col - 3 --> */}
    <div
      className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
      {/* <!--  --> */}
      <div className="md:w-[50%] w-full md:p-4 p-0 rounded-md">
        <h2 className="text-3xl font-semibold ">About Project</h2>

        <p className="text-md mt-4 ">This project is a dynamic and modern blog platform built using Next.js, Sanity CMS, and React Hooks for an interactive comment section. Leveraging the power of Next.js, the site delivers a fast, seamless, and highly optimized user experience with server-side rendering and static site generation.

Content management is handled by Sanity CMS, providing an intuitive and flexible backend for creating, editing, and organizing blog posts. The React Hooks-powered comment section enables users to engage with posts in real-time, ensuring a smooth and responsive interaction that enhances community engagement.

This project showcases the perfect blend of modern technologies to deliver a scalable, user-friendly, and developer-centric blogging platform.</p>
      </div>
      {/* <!--  --> */}
      <Image className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={aboutProject} alt="billboard image" />

    </div>
  </div>
</section>

{/* <!-- Photo by '@candjstudios' & '@framesforyourheart' on Unsplash --> */}
</div>
  );
}
