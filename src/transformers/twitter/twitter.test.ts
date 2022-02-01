import {twitterTransformer} from 'transformers/twitter'

test('detects twitter links', () => {
    expect(
        twitterTransformer.shouldTransform(
            'https://twitter.com/_PiperGuy_/status/1486371995533004803',
        ),
    ).toBeTruthy()
})

test('ignores non-twitter links', () => {
    expect(
        twitterTransformer.shouldTransform('https://example.com'),
    ).toBeFalsy()
})

test('transforms twitter links', async () => {
    const html = await twitterTransformer.getHTML(
        'https://twitter.com/_PiperGuy_/status/1486371995533004803',
    )

    // eslint-disable-next-line quotes
    expect(html).toEqual(expect.stringContaining('<div class="twitter">'))

    expect(html).toEqual(
        // eslint-disable-next-line quotes
        expect.stringContaining('<blockquote class="twitter-tweet">'),
    )

    expect(html).toEqual(
        expect.stringContaining(
            // eslint-disable-next-line quotes
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
    )
})
