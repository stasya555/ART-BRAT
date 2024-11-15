import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import PodcastsList from "@/components/PodcastsList";

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
        imgSrc="/images/titles/Podcast.svg"
        imgAlt="The word 'Podcast' in bold, uppercase lettering"
      >
        Podcast
      </PageTitle>

      <PodcastsList
          className="flex flex-col max-w-[95rem] w-full mx-auto py-12 md:py-48"
          imgSrc="/"
          imgAlt="Brat&ART"
        >
          Brat&ART
        </PodcastsList>
      </main>
    </>
  );
}
