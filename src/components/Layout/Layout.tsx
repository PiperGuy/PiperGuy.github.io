import Footer from 'components/Footer'
import Header from 'components/Header'
import {AppProvider} from 'context'
import {FC} from 'react'

import pkg from '../../../package.json'
import styles from './Layout.module.css'

const Layout: FC = ({children}) => {
    return (
        <AppProvider>
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>{children}</main>
                <Footer />
            </div>
        </AppProvider>
    )
}

export default Layout
