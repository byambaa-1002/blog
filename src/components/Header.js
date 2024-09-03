import { Logo } from "./icons/Logo";
import { SearchIcon } from "../components/icons/SearchIcon";
export const Header = () => {
  return (
    <div className=" flex gap-2 w-full justify-between">
      <Logo />
      <div className="h-11 flex gap-11 size-4 justify-center items-center">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <input placeholder="Search" />
        <SearchIcon />
      </div>
    </div>
  );
};
