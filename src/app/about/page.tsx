import Image from 'next/image';
import myImage from './me.png';
import styles from './about.module.css';

export default function AboutPage() {
    return <article>
        <Image src={myImage} alt='Nataliia Cherkashyna photo' loading='eager' />
        <div className={styles.root}>
            I am a confident Front-End developer with knowledge of HTML/CSS,
            JavaScript, TypeScript, React/Redux, Next.JS, NodeJS, Nest.JS.
            I have a proven track record of using Agile/Scrum methodology 
            to deliver projects on time, work as a team and focus on 
            user-friendliness. I quickly adapt to dynamics of the environment 
            and constructively solve problems and challenges that arise through
            a balance between work and daily life. I strive to acquire new 
            knowledge and effectivly apply it in practice. I am  a responsible 
            and punctual worker.
        </div>
    </article>
}