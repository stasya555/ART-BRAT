import Image from "next/image";
type AuthorsListProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};

export default function AuthorsList({
  children,
  className,
  imgSrc,
  imgAlt,
}: AuthorsListProps) {
  return (
    <>
      <div className="flex flex-col max-w-[95rem] w-full mx-auto py-8 lg:pt-24 lg:pb-48">
      <div>
            <article className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
              <img src="/images/authors/nikita-meow.png" alt="" width="150" height="150" className="h-[9.375rem] w-[9.375rem] rounded-[100%] "/>
              <b className="heading3-title text-[25px]">Nilita Chebotov</b>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
                <div className="flex gap-2">
                  <b className="font-semibold">Job</b>
                  <p>Крутой</p>
                </div>
                <div className="flex gap-2">
                <b className="font-semibold">City</b>
                <p>Berlin</p>
                </div>
                <a href="/authors/NilitaChebotov" className="flex gap-2">
                <span className="uppercase font-semibold">About</span>
                <img src="/icons/ri_arrow-right-line.svg" alt="" />
                </a>
              </div>
            </article>
            <div className="border border-black my-6"></div>
        </div>
        <div>
            <article className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16">
              <img src="/images/authors/vlad-lybimka.jpg" alt="" width="150" height="150" className="h-[9.375rem] w-[9.375rem] rounded-[100%] "/>
              <b className="heading3-title text-[25px]">Vlad Chursin</b>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-24">
                <div className="flex gap-2">
                  <b className="font-semibold">Job</b>
                  <p>zlyka</p>
                </div>
                <div className="flex gap-2">
                <b className="font-semibold">City</b>
                <p>Berlin</p>
                </div>
                <a href="/authors/NilitaChebotov" className="flex gap-2">
                <span className="uppercase font-semibold">About</span>
                <img src="/icons/ri_arrow-right-line.svg" alt="" />
                </a>
              </div>
            </article>
        </div>
      </div>
    
    </>
  );
}
