// import FeaturedProjects from 'components/FeaturedProjects'
import Hero from 'components/Hero'
// import LatestPosts from 'components/LatestPosts'

import Section from 'components/Section'
import {FC} from 'react'
import {Podcast as PodcastType} from 'types/podcast'
import {PostFrontmatter} from 'types/post'
import {Project} from 'types/project'
import {Video} from 'types/video'

import styles from './Home.module.css'

type HomeProps = {
    latestPosts: PostFrontmatter[]
    featuredProjects: Project[]
}

const Home: FC<HomeProps> = ({latestPosts, featuredProjects}) => {
    return (
        <div className={styles.sections}>
            <Hero />

            <Section title="blog" link="/blog">
                {/* <LatestPosts latestPosts={latestPosts} /> */}
            </Section>

            <Section title="projects" link="https://github.com/PiperGuy">
                {/* <FeaturedProjects featuredProjects={featuredProjects} /> */}
            </Section>
        </div>
    )
}

export default Home
