import Link from "next/link";
import Buttton from "./buttton";

const Navbar = () => {
  return (
    <div className="bg-white py-4 sticky top-0 z-10 px-4 sm:px-8 md:px-16 shadow-md">
      <div className="w-full flex items-center justify-between sm:gap-12 gap-4 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold hover:text-orange-400 flex-1 text-center sm:text-left mr-9">
          TrendSphere
        </h1>

        <Link href="/" className="navLink hover:text-orange-400 lg:text-xl">
          Home
        </Link>
        <Link
          href="/products"
          className="navLink hover:text-orange-400 lg:text-xl"
        >
          Collections
        </Link>
        <Link href="/cart">
          <Buttton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
