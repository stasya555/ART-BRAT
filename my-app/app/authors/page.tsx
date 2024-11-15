import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import AuthorsList from "@/components/AuthorsList";

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
        imgSrc="/images/titles/Authors.svg"
        imgAlt="The word 'Podcast' in bold, uppercase lettering"
      >
        Podcast
      </PageTitle>

      <AuthorsList
          className="flex flex-col max-w-[95rem] w-full mx-auto py-8 lg:pt-24 lg:pb-48"
          imgSrc="/"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </AuthorsList>
      </main>
    </>
  );
}
