export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'article',
    order: ['-fields.publishedAt']
  })

  return res.items.map((item: any) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt || '',
    coverImage: item.fields.coverImage?.fields?.file?.url || null,
    publishedAt: item.fields.publishedAt || null
  }))
})

