const mockGitHubPinnedResponse = {}

const mockNowPaths = ['2020-12-30.md', '2020-12-31.md', '2021-01-01.md']

const mockNowsResponse = [
    {
        data: {
            date: '2021-01-01',
        },
        content: 'This is a newer now.',
    },
    {
        data: {
            date: '2020-12-31',
        },
        content: 'This is a now.',
    },
    {
        data: {
            date: '2020-12-30',
        },
        content: 'This is an older now.',
    },
]

export {mockGitHubPinnedResponse, mockNowPaths, mockNowsResponse}
