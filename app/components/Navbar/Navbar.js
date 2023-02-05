"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { FiSearch } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'



const Navbar = () => {
    const [showSearchForm, setShowSearchForm] = useState(false)

    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.logo}>
                <Image width={30} height={30} src="/logo.png" alt="codemania" />
                <span>CodeMania</span>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.mainMenu}>
                    <li>
                        <FiSearch fontSize={'.9rem'} style={{ transform: 'translateY(3px)', cursor: 'pointer' }} onClick={() => setShowSearchForm(true)} />
                    </li>
                    <li>
                        <Link href={'/'}>HOME</Link>
                    </li>
                    <li>
                        <Link href={'/blogs'}>BLOG</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>ABOUT US</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>CONTACT US</Link>
                    </li>
                </ul >
            </nav >
            <form className={styles.searchForm} style={{ display: !showSearchForm ? 'none' : 'flex' }}>
                <HiXMark fontSize={'2rem'} style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer' }} onClick={() => setShowSearchForm(false)} />
                <input type="search" id="searchInput" placeholder='Search blog posts...' />
                <button type="submit">
                    <FiSearch fontSize={'1.6rem'} style={{ transform: 'translateY(3px)', cursor: 'pointer' }} onClick={() => setShowSearchForm(true)} />
                </button>
            </form>
        </header >
    )
}

export default Navbar