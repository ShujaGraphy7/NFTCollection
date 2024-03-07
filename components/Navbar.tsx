import { useState } from "react";
import styles from "../styles/Theme.module.css";
import logo from '../logo/logo.png'
import Image from "next/image";

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="/" className={styles.logoLink}>
                    <div className={styles.logoImage}>
                        <Image src={logo} alt="logo" />
                    </div>
                    <h1 className={styles.logoText}>FusionwaveAI</h1>
                </a>
            </div>
            <div className={styles.menu}>
                {/* <div className={styles.menuItem}>
                    <a href="https://fusionfight.netlify.app/" className={styles.menuLink}>
                        <button className={styles.roundedFull}>
                            Fusion Fight
                        </button>
                    </a>
                </div> */}
                {/* <div className={styles.menuItem}>
                    <button className={styles.roundedFull}>
                        FusionNFT
                    </button>
                </div> */}
                {/* <div className={styles.menuItem}>
                    <button onClick={toggleDropdown} className={styles.dropdownButton}>
                        ☰
                    </button>
                    {dropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <a href="https://fusionfight.netlify.app/" className={styles.dropdownLink}>
                                Fusion Fight
                            </a>
                            <a href="#" className={styles.dropdownLink}>
                                FusionNFT
                            </a>
                        </div>
                    )}
                </div> */}
            </div>
        </nav>
    );
};
