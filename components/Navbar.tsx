import styles from "../styles/Theme.module.css";
import logo from '../logo/logo.png'
import Image from "next/image";











import Link from 'next/link';


export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="Logo" />
          </a>
        </Link>
        <h1>FusionWaveAI</h1>
      </div>
    </nav>
  );
};


