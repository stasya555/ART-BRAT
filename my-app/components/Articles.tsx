import Image from "next/image";
import { animate, scroll } from "motion"

type ArticlesProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};


export default function Articles({
  children,
  className,
  imgSrc,
  imgAlt,
}: ArticlesProps) {
  return (
    <>
      <div className="max-w-[95rem] w-full mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-2 md:gap-0 my-6">
        <p className="font-semibold uppercase">Categories</p>
        <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase h-10 px-3 py-2 hover:bg-black hover:text-white border border-black rounded-full bg-black text-white">All</button>
            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase h-10 px-3 py-2 bg-white text-black hover:bg-black hover:text-white border rounded-full border-black">Art</button>
            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase h-10 px-3 py-2 bg-white text-black hover:bg-black hover:text-white border rounded-full border-black">Sculptures</button>
            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase h-10 px-3 py-2 bg-white text-black hover:bg-black hover:text-white border rounded-full border-black">Street art</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-48" >
      <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Street Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        <article className="border border-black p-8">
            <div className="flex items-center justify-between">
            <p className="font-semibold pr-2">11 November 2024</p>
            <span className="px-3 py-2 border border-black rounded-full">
                <p className="uppercase">Art</p>
            </span>
            </div>
            <a href="magazine/dont-close-your-eyes">
            <img className="w-full my-8 hover:scale-105 transition" src="/images/articles/preview/hope-dies-last.jpg" alt="" /></a>
            <h2 className="heading3-title mb-3">
                <b className="text-[25px]"><a href="/magazine/dont-close-your-eyes">Не закрывай глаза.</a></b>
            </h2>
            <p className="mt-3 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur eaque voluptas ad hic voluptates, laudantium commodi maiores deleniti eos cumque facilis dicta maxime voluptatem harum et natus modi ullam?</p>
            <div className="flex flex-wrap gap-4">
            <span className="flex">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Nikita Chebotov</p>
                </span>
                <span className="flex">
                    <p className="font-semibold pr-2">Duration</p>
                    <p>1 hours</p>
                </span>
            </div>
        </article>
        
      </div>
    </div>
    
    </>
  );
}
