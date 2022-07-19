import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import useDarkMode from "../lib/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from 'next/image';

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOut =  () => {
    auth.signOut();
    router.reload();
  }

  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' color="white" />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">next</button>
          </Link>

        </li>

        
                
        {/* user is signed in and has username*/}
        {username && (
          <>
            <li className="push-left">
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <ThemeIcon />
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/images/hacker.png'} />
              </Link>
            </li>
          </>
        )}


        {/* user is not signed in OR has not created username */}
        {!username && ( 
          <>
            <li>
              <ThemeIcon />
            </li>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log In</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>);
}
