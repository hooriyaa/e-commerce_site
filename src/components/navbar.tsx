import Link from "next/link";
import Buttton from "./buttton";

const Navbar = () => {
  return (
    <div className="bg-white py-3 sticky top-0 z-10 px-4 sm:px-6 md:px-8 shadow-md w-full">
      <div className="w-full flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl font-semibold hover:text-orange-400 flex-1 text-center sm:text-left mb-2 sm:mb-0">
          TrendSphere
        </h1>

        {/* Navigation Links and Cart Button */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="navLink text-sm sm:text-base hover:text-orange-400">
            Home
          </Link>
          <Link
            href="/products"
            className="navLink text-sm sm:text-base hover:text-orange-400"
          >
            Collections
          </Link>
          <Link href="/cart">
            <Buttton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
