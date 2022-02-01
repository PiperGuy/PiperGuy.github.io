import Link from 'next/link'
import {
    faDiscord,
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedinIn,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FC} from 'react'

import styles from './SocialLink.module.css'

type SocialLinkProps = {
    platform: 'instagram' | 'github' | 'twitter' | 'linkedin' | 'facebook'
}

const SocialLink: FC<SocialLinkProps> = ({platform}) => {
    let url
    let icon
    let label

    switch (platform) {
        case 'instagram':
            url = 'https://www.instagram.com/naveenpandurangi'
            icon = faInstagram
            label = 'instagram'
            break

        case 'github':
            url = 'https://github.com/PiperGuy'
            icon = faGithub
            label = 'github'
            break

        case 'twitter':
            url = 'https://www.twitter.com/_PiperGuy_'
            icon = faTwitter
            label = 'twitter'
            break

        case 'linkedin':
            url = 'https://www.linkedin.com/in/naveen-pandurangi'
            icon = faLinkedinIn
            label = 'linkedin'
            break

        case 'facebook':
            url = 'https://www.facebook.com/naveenpandurangi/'
            icon = faFacebook
            label = 'facebook'
            break
    }

    return (
        <Link href={url} aria-label={label} passHref>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
        </Link>
    )
}

export default SocialLink
