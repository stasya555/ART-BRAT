import Link from "next/link";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="max-w-[95rem] mx-auto px-6 bg-[black] text-white text-[50px] ">
        <span>
        <Marquee>
            фуууууууууууууууууууууууууууутееееееееееееееееееееееееееееер 
          </Marquee>
        </span>
      <div className="py-8 xl:py-[128px] grid grid-cols-1 2xl:grid-cols-2 gap-2 md:gap-12 xl:gap-32 items-center">
          <b className="uppercase text-footer-title overflow-hidden text-[80px]">
            Design news to your inbox
          </b>
          <div className="flex flex-wrap lg:justify-end gap-3">
            <form className="flex flex-col gap-4 max-w-[28rem] w-full">
              <div className="flex flex-wrap gap-3">
                <input type="text" className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2 max-w-[20rem]" placeholder="Email Address" name="email" />
                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase hover:bg-primary/90 h-10 px-4 py-2 disabled:cursor-none bg-white text-black hover:text-white" type="submit" >Sign Up</button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap lg:justify-between gap-6 max-w-[95rem] w-full">
          <img src="/logos/FyrreMagazineLogo-White.svg" alt="" width="200" height="18" />
          <div className="flex lg:flex-row max-w-[63.125rem] w-full">
            <nav className="flex flex-1" aria-label="left-footer-links">
              <ul className="text-white space-y-3 text-[18px]">
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="middle-footer-links">
            <ul className="text-white space-y-3 text-[18px]">
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="right-footer-links">
            <ul className="text-white space-y-3 text-[18px]">
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
                <li><a href="#">Art</a></li>
              </ul>
            </nav>
          </div>
        </div>


        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 py-3 lg:pt-[6rem] lg:pb-[4.0625rem] w-full">
          <p className="font-regular text-white text-[18px]">Designed by STASYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </div>
    </footer>
  );
};

export default Footer;
