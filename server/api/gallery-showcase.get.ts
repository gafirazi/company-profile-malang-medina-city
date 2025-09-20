export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  // Contentful model suggestion:
  // content_type: 'gallerySlide' with fields: title (text), image (asset), paragraph (Long text)
  const res = await client.getEntries({
    content_type: 'gallerySlide',
    order: ['fields.order']
  })

  return res.items.map((item: any) => {
    const f = item.fields || {}
    const imageUrl = f.image?.fields?.file?.url || null
    const paragraph = typeof f.paragraph === 'string' ? f.paragraph : ''
    return {
      id: item.sys.id,
      title: f.title || '',
      image: imageUrl,
      paragraph
    }
  })
})

