import SocialLink from 'components/SocialLink'
import {FC} from 'react'

import styles from './Footer.module.css'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <SocialLink platform="instagram" />
            <SocialLink platform="github" />
            <SocialLink platform="twitter" />
            <SocialLink platform="linkedin" />
            <SocialLink platform="facebook" />
        </footer>
    )
}

export default Footer
