import {render, screen} from '@testing-library/react'

import SocialLink from './SocialLink'

test('instagram', () => {
    render(<SocialLink platform="instagram" />)
    expect(screen.getByLabelText('instagram'))
})

test('github', () => {
    render(<SocialLink platform="github" />)
    expect(screen.getByLabelText('github'))
})

test('twitter', () => {
    render(<SocialLink platform="twitter" />)
    expect(screen.getByLabelText('twitter'))
})

test('linkedin', () => {
    render(<SocialLink platform="linkedin" />)
    expect(screen.getByLabelText('linkedin'))
})

test('facebook', () => {
    render(<SocialLink platform="facebook" />)
    expect(screen.getByLabelText('facebook'))
})
