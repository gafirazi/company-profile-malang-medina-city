export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  // Content type: productItem
  // fields: image (Asset), order (Number, optional), title/subtitle/stats (optional for future)
  const res = await client.getEntries({
    content_type: 'productItem',
    order: ['fields.order', 'sys.createdAt']
  })

  return res.items.map((it: any) => ({
    id: it.sys.id,
    image: it.fields?.image?.fields?.file?.url || null,
    title: it.fields?.title || '',
    subtitle: it.fields?.subtitle || ''
  }))
})

