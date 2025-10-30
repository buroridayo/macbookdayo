import { navlink } from "@/constans";
import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src="/logo.svg" alt="logo" width={24} height={24} />
        <ul>
          {navlink.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex item-center justify-center gap-2">
          <button>
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </button>
          <button>
            <Image src="/cart.svg" alt="cart" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
