import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden");
  });
  return (
    <div className="bg-gray-50 h-screen  overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
