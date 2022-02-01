import {FC} from 'react'
import styles from './Hero.module.css'

const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <span>I use code</span>
                <span>to create things</span>
                <span>that benefit others</span>
            </div>
        </div>
    )
}

export default Hero
