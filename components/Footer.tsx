"use client"
import React from 'react';
import logo from '../logo/logo.png'
import Image from 'next/image';
import styles from "../styles/Theme.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.footerContent}>
                <div className={styles.Logo}>
                    <a className={styles.logo} href="https://flowbite.com/">
                        <Image src={logo} alt="FlowBite Logo" />
                        <span>FusionwaveAI</span>
                    </a>
                </div>
                <div className={styles.links}>
                    <div>
                        <h2>Follow us</h2>
                        <ul >
                            <li className={styles.listInline}><a href="https://github.com/themesberg/flowbite">Github</a></li>
                            <li className={styles.listInline}><a href="https://discord.gg/4eeurUVvTy">Discord</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Legal</h2>
                        <ul className={styles.listInline}>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.socialLinks}>
                <a href="#">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 19">
                        {/* Facebook SVG Path */}
                    </svg>
                </a>
                <a href="#">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
                        {/* Discord SVG Path */}
                    </svg>
                </a>
                <a href="#">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
                        {/* Twitter SVG Path */}
                    </svg>
                </a>
                <a href="#">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        {/* GitHub SVG Path */}
                    </svg>
                </a>
                <a href="#">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        {/* Dribbble SVG Path */}
                    </svg>
                </a>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} <a href="https://flowbite.com/">FusionwaveAI™</a>. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
