import Link from 'next/link'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Hamburger from 'components/Hamburger'
import {useApp} from 'hooks'
import {FC} from 'react'

import styles from './MobileNavigation.module.css'

const MobileNavigation: FC = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <div className={styles.mobileNavigation}>
            <FontAwesomeIcon
                className={styles.close}
                icon={faTimes}
                onClick={onClick}
                aria-label="close"
            />

            <div className={styles.links}>
                <Link href="/blog" passHref>
                    <div className={styles.link}>blog</div>
                </Link>

                <Link href="/now" passHref>
                    <div className={styles.link}>now</div>
                </Link>

                <Link href="/uses" passHref>
                    <div className={styles.link}>uses</div>
                </Link>

                <Link href="/hire-me" passHref>
                    <div className={styles.link}>hire me</div>
                </Link>

                <Link href="/contact" passHref>
                    <div className={styles.link}>contact</div>
                </Link>
            </div>
        </div>
    ) : (
        <Hamburger />
    )
}

export default MobileNavigation
