import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Home() {
  let NavArray = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "AboutMe",
      link: "/about/aboutme",
    },
  ];

  return (
    <main className="">
      <Nav NavArray={NavArray}></Nav>

      

    </main>
  );
}
