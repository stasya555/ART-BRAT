import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Articles from "@/components/Articles";

export const metadata = {
  title: " BRAT&ART ",
  description: "Articles",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen max-w-[95rem] w-full mx-auto px-4 lg:pt-0 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <PageTitle
        className="sr-only"
        imgSrc="/images/titles/Magazine.svg"
        imgAlt="The word 'Magazine' in bold, uppercase lettering"
      >
        Magazine
      </PageTitle>

      <Articles
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-48"
          imgSrc="/"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </Articles>
        
      </main>
    </>
  );
}
