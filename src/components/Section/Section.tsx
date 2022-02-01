import Link from 'next/link'
import {FC, HTMLAttributes} from 'react'

import styles from './Section.module.css'

type SectionProps = {
    title: string
    link?: string
} & HTMLAttributes<HTMLDivElement>

const Section: FC<SectionProps> = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <Link href={link} passHref>
                    <div className={styles.link}>
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </Link>
            ) : (
                <h2 className={styles.title}>{title}</h2>
            )}

            {children}
        </section>
    )
}

export default Section
