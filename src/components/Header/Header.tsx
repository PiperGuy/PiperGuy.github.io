import Link from 'next/link'
import ColorTheme from 'components/ColorTheme'
import Logo from 'components/Logo'
import MobileNavigation from 'components/MobileNavigation'
import Navigation from 'components/Navigation'

import {FC} from 'react'

import styles from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/" aria-label="Piper Guy" passHref>
                    <Logo />
                </Link>
            </div>

            <div className={styles.right}>
                <Navigation />
                <MobileNavigation />
                <ColorTheme />
            </div>
        </header>
    )
}

export default Header
