import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  // Server actions
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  // Server actions
  const handleLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" width={144} height={30} priority />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span> Create</span>
              </Link>
              <form action={handleLogout}>
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={handleLogin}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
