import Image from 'next/image'
import styles from './About.module.css'

const AboutPage = () => {
    return (
        <div className={styles.about}>
            <Image src={'/about.jpg'} alt='Code' width={10000} height={10000} />
            <h2>What is CodeMania?</h2>
            <p>Codemania is a platform designed specifically for students who are interested in learning to code. This blog offers an array of articles and tutorials that are designed to help students learn to code in a fun and interactive way. The platform is free and ad-free, making it a great resource for students who are looking to learn to code without having to worry about being bombarded with advertisements.
                <br /><br />
                One of the key features of Codemania is its clean and user-friendly interface. The platform is designed to be easy to use and navigate, allowing students to quickly and easily find the information they need. The articles and tutorials are well-written and easy to understand, making them accessible to students of all skill levels. Whether you are a complete beginner or an experienced programmer, Codemania has something for you.
                <br /><br />
                In addition to its user-friendly interface, Codemania is also designed to be highly interactive. The platform provides students with a variety of resources and tools that they can use to learn and practice their coding skills. For example, students can try out the code examples that are included in the articles, allowing them to see how the code works in real-time. This hands-on approach to learning is a great way to help students solidify their understanding of the concepts they are learning.
                <br /><br />
                Another important feature of Codemania is that it is completely free and ad-free. This means that students can use the platform without having to worry about being interrupted by advertisements or having to pay for access to certain features. This is especially important for students who may be on a tight budget, as learning to code can often be an expensive pursuit.
                <br /><br />
                In conclusion, Codemania is a great resource for students who are interested in learning to code. The platform offers an array of articles and tutorials, a clean and user-friendly interface, and a highly interactive approach to learning. Additionally, Codemania is completely free and ad-free, making it an accessible and affordable resource for students of all skill levels. Whether you are just starting out or looking to improve your coding skills, Codemania is a great place to start.</p>
        </div>
    )
}

export default AboutPage