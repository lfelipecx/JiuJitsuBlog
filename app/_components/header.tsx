import Link from "next/link"
import { ModeToggle } from "./mode-toggle";

const Header = () => {
    return ( 
        
      <div className="flex justify-center items-center gap-5 py-12">
        
        <ul className="flex gap-5 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        <ModeToggle />
      </div>

     );
}
 
export default Header;