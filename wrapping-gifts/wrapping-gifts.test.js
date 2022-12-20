import { describe, expect, it } from 'vitest'

const wrapping = (gifts) => {
  // if (!Array.isArray(gifts)) {
  //   throw new Error('Gifts are not received or is not an array')
  // }
  return gifts.map((gift) => {
    const wrap = '*'
    const giftWrap = wrap.repeat(gift.length + 2)
    const wrapAtTheCenter = `\n${wrap}${gift}${wrap}\n`

    return `${giftWrap}${wrapAtTheCenter}${giftWrap}`
  })
}

describe('Wrapping gifts', () => {
  it('should throw an error if wrapping is not a function', () => {
    expect(wrapping).toBeTypeOf('function')
  })

  // it('should throw an error if parameter is not received it', () => {
  //   expect(() => wrapping()).toThrow('Gifts are not received or is not an array')
  // })

  it('should return an empty array if gifts is empty', () => {
    expect(wrapping([])).toStrictEqual([])
  })

  it('should throw an error if array does not return the same length of gifts array', () => {
    const gifts = ['cat', 'game', 'socks']
    expect(wrapping(gifts)).toHaveLength(gifts.length)
  })

  it('should throw an error if array does not return the gifts envolved it', () => {
    const gifts = ['cat', 'game', 'socks']
    expect(wrapping(gifts)[0]).toBe('*****\n*cat*\n*****')
    expect(wrapping(gifts)[1]).toBe('******\n*game*\n******')
    expect(wrapping(gifts)[2]).toBe('*******\n*socks*\n*******')
  })
})
