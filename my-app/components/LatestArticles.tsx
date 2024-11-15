"use client";

import { motion } from "framer-motion";

import Image from "next/image";

type LatestArticlesProps = {
  children: React.ReactNode;
  className?: string;
  imgSrc: string;
  imgAlt: string;
};
const items = ["Первый", "Второй", "Третий"];

export default function LatestArticles({
  children,
  className,
  imgSrc,
  imgAlt,
}: LatestArticlesProps) {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12 py-6 md:py-10 max-w-[95rem] w-full mx-auto rounded-lg"
      >
        <article className="flex flex-col-reverse sm:flex-col gap-6 md:gap-12">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <h2 className="text-subtitle">
              <motion.p className="text-neutral-950 text-[80px] font-semibold  uppercase leading-[80px]">
                Не Закрывай Глаза.
              </motion.p>
            </h2>
            <article className="flex flex-col justify-between gap-2">
              <p className="font-semibold pr-2">
                by the end of the summer, she was a lover i saw her ex and he's
                dressing like me hair kinda messy like me nobody gets it like me
                we made it to winter, naked at dinner standin' on seats, 'cause
                they playin' our song the waiter's always taking too long or
                maybe we're just staying too long{" "}
              </p>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">Text</p>
                    <p>Vlad CH</p>
                  </span>

                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">Date</p>
                    <p>24 October 2024</p>
                  </span>

                  <span className="flex flex-wrap">
                    <p className="font-semibold pr-2">Read</p>
                    <p>2 mins</p>
                  </span>

                  <span className="px-3 py-2 border border-black rounded-full w-fit">
                    <p className="uppercase">ART</p>
                  </span>
                </div>
              </div>
            </article>
          </article>
          <div>
            <Image
              src="/images/titles/orig.gif"
              width={1500}
              height={1000}
              alt="#"
            />
          </div>
        </article>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-24">
        
        <div className="lg:w-3/4">
          <motion.article initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
            <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
              <a
                className="h-60 w-60"
                href="/images/articles/preview/hope-dies-last.jpg"
              >
                <img src="/images/articles/preview/hope-dies-last.jpg" alt="" />
              </a>
              <article className="flex flex-col justify-between">
                <div className="mb-4 :md:mb-0">
                  <h3 className="heading3-title mb-3 text-[30px]">
                    <b>The devil is the details</b>
                  </h3>
                  <p>
                    Де́исус (греч. δέησις прошение, моление) — икона или группа
                    икон, воплощающих идею заступничества, моления за людей
                    и имеющие в центре композиции образ Христа Вседержителя.
                    Главные молитвы христианства представлены в наиболее
                    соответствующих содержанию и значению образах, которые при
                    наложении формируют единый образ Бога.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center ">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>Vlad CH</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <p>24 October 2024</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>2 mins</p>
                    </span>

                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">ART</p>
                    </span>
                  </div>
                </div>
              </article>
            </article>
            <div
              data-data-orientation="horizontal"
              role="separator"
              className="border border-black my-6"
            ></div>
          </motion.article>
          <motion.article initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
            <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
              <a
                className="h-60 w-60"
                href="/images/articles/preview/hope-dies-last.jpg"
              >
                <img
                  src="/images/articles/preview/the-best-art-museums.jpg"
                  alt=""
                />
              </a>
              <article className="flex flex-col justify-between">
                <div className="mb-4 :md:mb-0">
                  <h3 className="heading3-title mb-3 text-[30px]">
                    <b>The devil is the details</b>
                  </h3>
                  <p>
                    Де́исус (греч. δέησις прошение, моление) — икона или группа
                    икон, воплощающих идею заступничества, моления за людей
                    и имеющие в центре композиции образ Христа Вседержителя.
                    Главные молитвы христианства представлены в наиболее
                    соответствующих содержанию и значению образах, которые при
                    наложении формируют единый образ Бога.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center ">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>Vlad CH</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <p>24 October 2024</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>2 mins</p>
                    </span>

                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">ART</p>
                    </span>
                  </div>
                </div>
              </article>
            </article>
            <div
              data-data-orientation="horizontal"
              role="separator"
              className="border border-black my-6"
            ></div>
          </motion.article>
          <motion.article initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 2 }}
        viewport={{ once: true }}>
            <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
              <a
                className="h-60 w-60"
                href="/images/articles/preview/hope-dies-last.jpg"
              >
                <img
                  src="/images/articles/preview/the-devil-is-the-details.jpg"
                  alt=""
                />
              </a>
              <article className="flex flex-col justify-between">
                <div className="mb-4 :md:mb-0">
                  <h3 className="heading3-title mb-3 text-[30px]">
                    <b>The devil is the details</b>
                  </h3>
                  <p>
                    Де́исус (греч. δέησις прошение, моление) — икона или группа
                    икон, воплощающих идею заступничества, моления за людей
                    и имеющие в центре композиции образ Христа Вседержителя.
                    Главные молитвы христианства представлены в наиболее
                    соответствующих содержанию и значению образах, которые при
                    наложении формируют единый образ Бога.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center ">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>Vlad CH</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <p>24 October 2024</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>2 mins</p>
                    </span>

                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">ART</p>
                    </span>
                  </div>
                </div>
              </article>
            </article>
            <div
              data-data-orientation="horizontal"
              role="separator"
              className="border border-black my-6"
            ></div>
          </motion.article>
          <motion.article initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}>
            <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
              <a
                className="h-60 w-60"
                href="/images/articles/preview/hope-dies-last.jpg"
              >
                <img
                  src="/images/articles/preview/street-art-festival.jpg"
                  alt=""
                />
              </a>
              <article className="flex flex-col justify-between">
                <div className="mb-4 :md:mb-0">
                  <h3 className="heading3-title mb-3 text-[30px]">
                    <b>The devil is the details</b>
                  </h3>
                  <p>
                    Де́исус (греч. δέησις прошение, моление) — икона или группа
                    икон, воплощающих идею заступничества, моления за людей
                    и имеющие в центре композиции образ Христа Вседержителя.
                    Главные молитвы христианства представлены в наиболее
                    соответствующих содержанию и значению образах, которые при
                    наложении формируют единый образ Бога.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center ">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>Vlad CH</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <p>24 October 2024</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>2 mins</p>
                    </span>

                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">ART</p>
                    </span>
                  </div>
                </div>
              </article>
            </article>
            <div
              data-data-orientation="horizontal"
              role="separator"
              className="border border-black my-6"
            ></div>
          </ motion.article>
          <motion.article initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 3 }}
        viewport={{ once: true }}>
            <article className="grid md:grid-cols-[0fr_1fr] gap-6 sm:gap-12">
              <a
                className="h-60 w-60"
                href="/images/articles/preview/hope-dies-last.jpg"
              >
                <img
                  src="/images/articles/preview/dont-close-your-eyes.jpg"
                  alt=""
                />
              </a>
              <article className="flex flex-col justify-between">
                <div className="mb-4 :md:mb-0">
                  <h3 className="heading3-title mb-3 text-[30px]">
                    <b>The devil is the details</b>
                  </h3>
                  <p>
                    Де́исус (греч. δέησις прошение, моление) — икона или группа
                    икон, воплощающих идею заступничества, моления за людей
                    и имеющие в центре композиции образ Христа Вседержителя.
                    Главные молитвы христианства представлены в наиболее
                    соответствующих содержанию и значению образах, которые при
                    наложении формируют единый образ Бога.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center ">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Text</p>
                      <p>Vlad CH</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Date</p>
                      <p>24 October 2024</p>
                    </span>

                    <span className="flex flex-wrap">
                      <p className="font-semibold pr-2">Read</p>
                      <p>2 mins</p>
                    </span>

                    <span className="px-3 py-2 border border-black rounded-full w-fit">
                      <p className="uppercase">ART</p>
                    </span>
                  </div>
                </div>
              </article>
            </article>
          </motion.article>
        </div>
        <motion.div className="lg:w-1/4" initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 2 }}
        viewport={{ once: true }}>
          <aside>
            <h3 className="uppercase font-semibold mb-2">Printmagazine</h3>
            <b className="text-5xl font-bold">11/2024</b>
            <img src="/images/articles/single-post/Group.jpg" alt="" />
            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[black] text-white mt-5">
              Заказать
            </button>
            <article>
              <h2 className="uppercase font-semibold mt-16 mb-8">
                Самый популярный
              </h2>
              <div className="grid grid-cols-[0fr_1fr] gap-8">
                <p className="text-2xl font-semibold">01</p>
                <article className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">
                    Фестиваль уличного искусства
                  </h3>
                  <span className="flex gap-2">Владислав Анатольевич</span>
                </article>
              </div>
              <div
                data-orientation="horizontal"
                role="separator"
                className="border border-black my-6"
              ></div>
            </article>
            <article>
              <div className="grid grid-cols-[0fr_1fr] gap-8">
                <p className="text-2xl font-semibold">02</p>
                <article className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">
                    Фестиваль уличного искусства
                  </h3>
                  <span className="flex gap-2">Владислав Анатольевич</span>
                </article>
              </div>
              <div
                data-orientation="horizontal"
                role="separator"
                className="border border-black my-6"
              ></div>
            </article>
            <article>
              <div className="grid grid-cols-[0fr_1fr] gap-8">
                <p className="text-2xl font-semibold">03</p>
                <article className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">
                    Фестиваль уличного искусства
                  </h3>
                  <span className="flex gap-2">Владислав Анатольевич</span>
                </article>
              </div>
            </article>
            <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
              <h3 className="uppercase font-semibold mb-2">Newsletter</h3>
              <b className="heading3-title mb-4 text-[30px]">
                Design News to your Inbox
              </b>
              <form className="undefined">
                <div className="undefined">
                  <input
                    type="text"
                    placeholder="Email  adress"
                    name="email"
                    className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2 undefined"
                  />
                  <button
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 disabled:cursor-none undefined bg-[black] text-white"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </motion.div>
      </div>
      <motion.div className="flex justify-between"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}>
        <b className="uppercase font-semibold text-lg hidden sm:block md:text-[6rem] text-subheading mt-[100px]">
          Podcast
        </b>
      </motion.div>

      <a
        href="/podcast"
        className="flex justify-end items-center gap-2 uppercase font-semibold w-full"
      >
        <p className="uppercase font-semibold text-lg hidden sm:block md:text-[2rem]">
          All episodes
        </p>
        <img
          src="/icons/ri_arrow-right-line.svg"
          alt=""
          className="w-fit h-fit"
        />
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 max-w-[95rem] w-full mx-auto border border-black border-collapse mt-10">
        <article className="border border-black p-4 md:p-12">
          <a href="/podcasts/problem">
            <img src="/images/podcasts/preview/podcast-cover-ep02.jpg" alt="" />
          </a>
          <h2 className="heading3-title mt-8 mb-12">
            <a href="/podcasts/problem">
              <b className=" text-[20px]">
                The Problem of today’s cultural development
              </b>
            </a>
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="flex">
              <p className="font-semibold pr-2">Date</p>
              <p className="font-semibold pr-2">06 November 2024</p>
            </span>
          </div>
        </article>
        <article className="border border-black p-4 md:p-12">
          <a href="/podcasts/problem">
            <img src="/images/podcasts/preview/podcast-cover-ep03.jpg" alt="" />
          </a>
          <h2 className="heading3-title mt-8 mb-12">
            <a href="/podcasts/problem">
              <b className="text-[20px]">
                The Problem of today’s cultural development
              </b>
            </a>
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="flex">
              <p className="font-semibold pr-2">Date</p>
              <p className="font-semibold pr-2">06 November 2024</p>
            </span>
          </div>
        </article>
        <article className="border border-black p-4 md:p-12">
          <a href="/podcasts/problem">
            <img src="/images/podcasts/preview/podcast-cover-ep01.jpg" alt="" />
          </a>
          <h2 className="heading3-title mt-8 mb-12">
            <a href="/podcasts/problem">
              <b className="text-[20px]">
                The Problem of today’s cultural development
              </b>
            </a>
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="flex">
              <p className="font-semibold pr-2">Date</p>
              <p className="font-semibold pr-2">06 November 2024</p>
            </span>
          </div>
        </article>
      </div>
      <div className="flex justify-between mt-[80px]" 
          >
        <motion.b className="uppercase font-semibold text-lg hidden sm:block md:text-[6rem] text-subheading " whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}>
          Authors
        </motion.b>
        <a
          className="flex justify-end items-center gap-2 uppercase font-semibold w-full"
          href="/authors"
        >
          <p className="uppercase font-semibold text-lg hidden sm:block md:text-[2rem]">
            All authors
          </p>
          <img
            src="/icons/ri_arrow-right-line.svg"
            alt=""
            className="w-fit h-fit"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-48 max-w-[95rem] w-full mx-auto border border-black border-collapse  mt-[80px]">
        <article className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 p-4 md:p-8 border border-black">
          <a href="/authors">
            <img
              src="/images/authors/nikita-meow.png"
              alt=""
              height="150"
              width="150"
              className="w-[9.375rem] h-[9.375rem] object-cover rounded-full hover:scale-105 transition"
            />
          </a>
          <article>
            <b className="heading3-title mb-4">Nikita Chebotov</b>
            <div className="flex gap-8">
              <span className="flex">
                <p className="font-semibold pr-2">Job</p>
                <p>Крутой предмет</p>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">City</p>
                <p>Berlin</p>
              </span>
            </div>
          </article>
        </article>
        <article className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 p-4 md:p-8 border border-black">
          <a href="/authors">
            <img
              src="/images/authors/vlad-lybimka.jpg"
              alt=""
              height="150"
              width="150"
              className="w-[9.375rem] h-[9.375rem] object-cover rounded-full hover:scale-105 transition"
            />
          </a>
          <article>
            <b className="heading3-title mb-4">Vlad Chursin</b>
            <div className="flex gap-8">
              <span className="flex">
                <p className="font-semibold pr-2">Job</p>
                <p>hohey and sweety♥</p>
              </span>
              <span className="flex">
                <p className="font-semibold pr-2">City</p>
                <p>Berlin</p>
              </span>
            </div>
          </article>
        </article>
      </div>
    </>
  );
}
