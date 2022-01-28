import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        additionalMetaTags={[
          {
            name: "google-site-verification",
            content: "nJEGnq3JbSOe9SFw4pOQUILq94n4vHlZovKXQ50icfk",
          },
        ]}
      />
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="Welcome to my app!" />
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
}
