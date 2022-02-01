import Layout from 'components/Layout'
import Home from 'components/Home'
import {GetStaticProps} from 'next'
import {FC} from 'react'
import {Project} from 'types/project'
// import {getLatestPosts} from 'utils/posts'
// import {getFeaturedProjects} from 'utils/projects'
import {PostFrontmatter} from 'types/post'

type IndexPageProps = {
    latestPosts: PostFrontmatter[]
    featuredProjects: Project[]
}

const IndexPage: FC<IndexPageProps> = ({latestPosts, featuredProjects}) => {
    return (
        <Layout>
            <Home
                latestPosts={latestPosts}
                featuredProjects={featuredProjects}
            />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    // const latestPosts = getLatestPosts()
    // const featuredProjects = await getFeaturedProjects()
    return {
        props: {
            latestPosts: {},
            featuredProjects: {},
        },
    }
}

export default IndexPage
export {getStaticProps}
