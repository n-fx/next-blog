import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  return (
    <>
     <Head>
        <title>About page</title>
      </Head>
      <h1>About page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />

    </>
  );
}