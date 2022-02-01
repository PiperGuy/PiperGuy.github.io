import Link from 'next/link'
import {FC} from 'react'

import styles from './Navigation.module.css'

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link href="/blog" passHref>
                <div className={styles.link}>blog</div>
            </Link>

            <span>|</span>

            <Link href="/now" passHref>
                <div className={styles.link}>now</div>
            </Link>

            <span>|</span>

            <Link href="/uses" passHref>
                <div className={styles.link}>uses</div>
            </Link>

            <span>|</span>

            <Link href="/hire-me" passHref>
                <div className={styles.link}>hire me</div>
            </Link>

            <span>|</span>

            <Link href="/contact" passHref>
                <div className={styles.link}>contact</div>
            </Link>
        </nav>
    )
}

export default Navigation
