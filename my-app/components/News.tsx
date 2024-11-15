import Marquee from "react-fast-marquee";

type NewsProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};
const url = "http://localhost:4000/news";
let response = await fetch(url);

if (response.ok) {
  let json = await response.json();
  console.log(json);
  console.log(response);
} else {
  console.log("Ошибка сервера!");
}

export default function News({
  children,
  className,
  imgSrc,
  imgAlt,
}: NewsProps) {
  return (
    <div className="flex bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden">
      <div className="bg-black z-10 px-6">
        <span className="flex gap-2 bg-black font-semibold uppercase whitespace-nowrap">
          <p>Новости</p>
          <p className="block sm:hidden">+++</p>
          <p className="hidden sm:block">new типа</p>
          <Marquee>
            the creator the creator the creator the creator the creator the
            creator
          </Marquee>
        </span>
      </div>
      <div className="flex gap-4 sliding-ticker relative"></div>
    </div>
  );
}
