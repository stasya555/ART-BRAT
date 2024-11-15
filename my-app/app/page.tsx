import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import News from "@/components/News";
import LatestArticles from "@/components/LatestArticles";

export const metadata = {
  title: " BRAT&ART ",
  description: "Articles",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2 pointer-events: none;">
        <PageTitle
          className="sr-only pointer-events: none;"
          imgSrc="/images/titles/Art&Life.svg"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </PageTitle>

        <News
          className="flex bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden"
          imgSrc="/"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </News>

        <LatestArticles
          className="flex bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden"
          imgSrc="/"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </LatestArticles>

        
      </main>
    </>
  );
}
