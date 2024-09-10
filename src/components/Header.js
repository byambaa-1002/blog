import { Logo } from "./icons/Logo";
import { SearchIcon } from "../components/icons/SearchIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex gap-2 w-full justify-between py-5 px-5">
      <Logo />
      <div className="h-11 flex gap-11 size-4 justify-center items-center">
        <button className="btn btn-ghost">
          <Link href="/">Home</Link>
        </button>
        <button className="btn btn-ghost">
          <Link href="/">Blog</Link>
        </button>
        <button className="btn btn-ghost">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <input placeholder="Search" />
        <SearchIcon />
      </div>
    </div>
  );
};
