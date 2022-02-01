import {renderHook} from '@testing-library/react-hooks'
import {useMeta} from 'hooks'
import {mockMeta} from 'utils/test-utils/mocks'

test('returns metadata', () => {
    const {result} = renderHook(() => useMeta())
    expect(result.current).toEqual(mockMeta)
})
