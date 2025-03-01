import Link from "next/link";
import NavLink from "./NavLinks";
export default function SideBar() {
  return (
    <div>
      <Link href="/store">Logo</Link>

      <div>
        <NavLink />
        <form>Sign Out</form>
      </div>
    </div>
  );
}
