import {Markdown} from 'types/markdown'
import {Meta} from 'types/meta'
import {Now, NowFrontmatter} from 'types/now'
import {Podcast} from 'types/podcast'
import {Post, PostFrontmatter, Topic} from 'types/post'
import {Project} from 'types/project'
import {Sponsors} from 'types/sponsor'
import {Testimonial} from 'types/testimonial'
import {Video} from 'types/video'

const mockPosts: Post[] = [
    {
        html: '<p>This is the first test post.</p>',
        frontmatter: {
            date: '2021-01-01',
            slug: 'first-test-post',
            title: 'first test post',
            topic: {
                icon: '😎',
                name: 'life',
            },
        },
    },
    {
        html: '<p>This is the second test post.</p>',
        frontmatter: {
            date: '2021-02-01',
            slug: 'second-test-post',
            title: 'second test post',
            topic: {
                icon: '🔌',
                name: 'tech',
            },
        },
    },
    {
        html: '<p>This is the third test post.</p>',
        frontmatter: {
            date: '2021-03-01',
            slug: 'third-test-post',
            title: 'third test post',
            topic: {
                icon: '💻',
                name: 'coding',
            },
        },
    },
    {
        html: '<p>This is the fourth test post.</p>',
        frontmatter: {
            date: '2021-03-01',
            slug: 'fourth-test-post',
            title: 'fourth test post',
            topic: {
                icon: '💻',
                name: 'coding',
            },
        },
    },
]

const mockSortedPosts: Post[] = [
    mockPosts[2],
    mockPosts[3],
    mockPosts[1],
    mockPosts[0],
]

const mockPostsFrontmatter: PostFrontmatter[] = mockPosts.map(
    mockPost => mockPost.frontmatter,
)

const mockSortedPostsFrontmatter: PostFrontmatter[] = mockSortedPosts.map(
    mockPost => mockPost.frontmatter,
)

const mockPost: Post = mockPosts[0]

const mockPostFrontmatter: PostFrontmatter = mockPost.frontmatter

const mockMeta: Meta = {
    siteUrl: 'https://piperguy.github.io',
}

const mockVideos: Video[] = [
    {
        id: 'abc123',
        title: 'first test video',
        thumbnail: 'https://youtube.com/first.jpg',
    },
    {
        id: 'def456',
        title: 'second test video',
        thumbnail: 'https://youtube.com/second.jpg',
    },
]

const mockProjects: Project[] = []

const mockPodcast: Podcast = {
    title: 'Test Podcast',
    link: 'https://anchor.fm/test-podcast',
    image: 'https://anchor.fm/test-podcast.jpg',
    episodes: [],
}

const mockSponsors: Sponsors = {
    'monthly': [],
    'one-time': [],
}

const mockChannelStatus = {isLive: true}

const mockHireMe: Markdown = {
    html: '<p>hire me</p>',
    frontmatter: {},
}

const mockContact: Markdown = {
    html: '<p>contact</p>',
    frontmatter: {},
}

const mockResume: Markdown = {
    html: '<p>resume</p>',
    frontmatter: {},
}

const mockTestimonials: Testimonial[] = [
    {
        html: '<p>First test review.</p>',
        frontmatter: {
            name: 'First Test User',
            profile: 'https://twitter.com/first-test-user',
            photo: 'https://twitter.com/first-test-user.jpg',
        },
    },
    {
        html: '<p>Second test review.</p>',
        frontmatter: {
            name: 'Second Test User',
            profile: 'https://twitter.com/second-test-user',
            photo: 'https://twitter.com/second-test-user.jpg',
        },
    },
]

const mockNows: Now[] = [
    {
        html: '<p>This is a newer now.</p>',
        frontmatter: {
            date: '2021-01-01',
        },
    },
    {
        html: '<p>This is a now.</p>',
        frontmatter: {
            date: '2020-12-31',
        },
    },
    {
        html: '<p>This is an older now.</p>',
        frontmatter: {
            date: '2020-12-30',
        },
    },
]

const mockNowsFrontmatter: NowFrontmatter[] = mockNows.map(
    mockNow => mockNow.frontmatter,
)

const mockNow: Now = mockNows[1]

const mockNewerNow: Now = mockNows[0]

const mockOlderNow: Now = mockNows[2]

const mockTopics: Topic[] = [
    {
        icon: '😎',
        name: 'life',
    },
    {
        icon: '🔌',
        name: 'tech',
    },
    {
        icon: '💻',
        name: 'coding',
    },
]

const mockTopic: Topic = mockTopics[0]

const mockRepositoryTopics = [
    'gatsby',
    'javascript',
    'next',
    'node',
    'react',
    'svelte',
    'tailwind',
    'typescript',
    'blog',
    'portfolio',
]

export {
    mockChannelStatus,
    mockContact,
    mockHireMe,
    mockMeta,
    mockNewerNow,
    mockNow,
    mockNows,
    mockNowsFrontmatter,
    mockOlderNow,
    mockPodcast,
    mockPost,
    mockPostFrontmatter,
    mockPosts,
    mockPostsFrontmatter,
    mockProjects,
    mockRepositoryTopics,
    mockResume,
    mockSortedPosts,
    mockSortedPostsFrontmatter,
    mockSponsors,
    mockTestimonials,
    mockTopic,
    mockTopics,
    mockVideos,
}
