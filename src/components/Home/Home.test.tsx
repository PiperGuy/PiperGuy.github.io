import {render, screen} from '@testing-library/react'
import Home from 'components/Home'
import {mockPostsFrontmatter, mockProjects} from 'utils/test-utils/mocks'

test('shows home page', () => {
    render(
        <Home
            latestPosts={mockPostsFrontmatter}
            featuredProjects={mockProjects}
        />,
    )

    expect(screen.getByText('I use code'))
    expect(screen.getByText('blog'))
    expect(screen.getByText('projects'))
})
