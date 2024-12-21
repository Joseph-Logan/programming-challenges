export const wrapping = (gifts) => {
  return gifts.map((gift) => {
    const wrap = '*'
    const giftWrap = wrap.repeat(gift.length + 2)
    const wrapAtTheCenter = `\n${wrap}${gift}${wrap}\n`

    return `${giftWrap}${wrapAtTheCenter}${giftWrap}`
  })
}
