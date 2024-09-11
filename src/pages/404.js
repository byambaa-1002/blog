import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import Trending from "@/components/Trending";
export default function page() {
  const light = useContext(ThemeContext);
  console.log(light);
  return (
    <div>
      <button onClick={() => setDark("dark")}></button>
      <Trending />
    </div>
  );
}
