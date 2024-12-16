import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai"; 




export default function Header() {
  return (
   <>
   <header className="flex justify-between">
    <div>
        <Image src="/logo.png" alt="logo" width="150" height="100" className="ml-5 mt-5" />
    </div>
   
        <nav className="flex items-center mt-6  ">

    <ul className="flex space-x-7">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
     </ul>
        </nav>

        <div className="flex items-center mt-6 space-x-5 mr-6">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />
        </div>
   
   </header>
   </>
  );
}
