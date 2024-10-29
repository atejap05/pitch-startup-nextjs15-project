import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" width={144} height={30} priority />
        </Link>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span> Create</span>
              </Link>

              <button onClick={signOut}>
                <span>Logout</span>
              </button>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={signIn("github")}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
