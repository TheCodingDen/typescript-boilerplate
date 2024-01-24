import { main } from '../src/index'

describe('main', () => {
  it('does nothing', () => {
    expect(void main('null', 0)).toBe(undefined)
  })
})
