import Link from 'next/link'
import styles from './Footer.module.css'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/'} className={styles.logo}>
                <Image width={30} height={30} src="/logo.png" alt="codemania" />
                <span>CodeMania</span>
            </Link>
            <div className={styles.footerRight}>
                <Link target={'_blank'} href={'https://www.facebook.com/ImTiAzHuSsAiN0307'} title='Link To Facebook'>
                    <AiFillFacebook />
                </Link>
                <Link target={'_blank'} href={'https://www.linkedin.com/in/muhammad-imtiaz-hussain/'} title='Link To Linkedin'>
                    <AiFillLinkedin />
                </Link>
                <Link target={'_blank'} href={'https://www.instagram.com/imtiaz0307/'} title='Link To Instagram'>
                    <AiFillInstagram />
                </Link>
                <Link target={'_blank'} href={'https://www.github.com/imtiaz0307'} title='Link To Github'>
                    <AiFillGithub />
                </Link>
            </div>
        </footer>
    )
}

export default Footer