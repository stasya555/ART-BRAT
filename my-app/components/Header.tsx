import Link from "next/link";
import menuLinks from "@/data/menu";

const Header = () => {
  return (
    <header className="flex flex-col justify-between max-w-[95rem] w-full mx-auto px-4 md:pt-8 pt-4 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
      <div className="flex">
        <div className="flex flex-1">
          <Link href="/" aria-label="Return to homepage">
            <img
              className="h-full w-fit"
              src="/logos/FyrreMagazineLogo-Black.svg"
              alt="logo"
            />
          </Link>
        </div>
        <nav
          className="flex-1 items-center justify-end gap-6 hidden md:flex"
          aria-labelledby="desktop-nav"
        >
          {menuLinks.map((menuItem, index) => (
            <Link key={index} href={menuItem.href}>
              {menuItem.label}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="border-black border-t-0 border mt-4" />
    </header>
  );
};

export default Header;
