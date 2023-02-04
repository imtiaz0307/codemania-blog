import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.css'
import { blogs } from '@/data/blogsData'

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1>CODEMANIA</h1>
          <h3>A Journey Through The Coding World</h3>
          <p>Welcome to the hub of coding enthusiasts! Here, we celebrate the power of code and the limitless possibilities it brings. Our team of experienced developers and tech experts share their knowledge and skills to help you stay ahead in the ever-evolving world of technology. From tutorials and guides, to best practices and cutting-edge tools, we cover it all. Join us on this journey of discovery, innovation and growth as we empower you to become a coding hero. Let's code together!</p>
          <div className={styles.buttons}>
            <Link href={'/blogs'} className={styles.btn}>Go To Blogs Page</Link>
            <Link href={'/contact'} className={styles.btn}>Contact Us</Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image src={'/hero.jpg'} alt='Laptop Image' width={600} height={600} />
        </div>
      </section >

      {/* blogs section */}
      <section className={styles.blogsSection}>
        <h2>Recent Blogs</h2>
        <div className={styles.blogs}>
          {
            blogs.map(((blog, index) => {
              return (
                <div key={index} className={styles.blog}>
                  <div className={styles.blogImg}>
                    <Image width={1000} height={1000} src={blog.img} alt={blog.title} />
                  </div>
                  <h2>{blog.title.slice(0, 100)}</h2>
                  <p>{blog.description.slice(0, 230)}... <Link href={`/blogs/${blog.title}`}>read more</Link></p>
                  <Link href={`/blogs/${blog.title}`} className={styles.btn}>Continue Reading</Link>
                </div>
              )
            }))
          }
        </div>
        <Link href={'/blogs'} className={styles.exploreBtn}>Explore More</Link>
      </section>
      {/* mailing */}
      <section className={styles.mailing}>
        <h2>Subscribe To Our Mailing List!</h2>
        <h4>Never miss any blog post, get notified whenever we posts something.</h4>
        <form className={styles.mailingForm}>
          <input type="email" placeholder='Enter your email address.' />
          <button type='submit'>Subscribe</button>
        </form>
      </section>
    </main >
  )
}
