"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import { FiSearch } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'



const Navbar = () => {
    // const router = useRouter()
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const searchQueryRef = useRef()

    const searchHandler = (e) => {
        e.preventDefault()
        searchQueryRef.current.click()
        setShowSearchForm(false)
        setSearchQuery('')
    }

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
            <form className={styles.searchForm} style={{ display: !showSearchForm ? 'none' : 'flex' }} onSubmit={searchHandler}>
                <HiXMark fontSize={'2rem'} style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer' }} onClick={() => setShowSearchForm(false)} />
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search" id="searchInput" placeholder='Search blog posts...' />

                <button type='submit'>
                    <FiSearch fontSize={'1.6rem'} style={{ transform: 'translateY(3px)', cursor: 'pointer' }} onClick={() => setShowSearchForm(true)} />
                </button>
                <Link href={{ pathname: '/blogs', query: { search: searchQuery } }} ref={searchQueryRef} />
            </form>
        </header >
    )
}

export default Navbar