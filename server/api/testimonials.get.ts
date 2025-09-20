export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  // Option A: simple list content type `testimonial` (quote + author)
  const res = await client.getEntries({
    content_type: 'testimonial',
    order: ['sys.createdAt']
  })

  return res.items.map((item: any) => ({
    id: item.sys.id,
    quote: item.fields.quote || '',
    author: item.fields.author || ''
  }))
})

