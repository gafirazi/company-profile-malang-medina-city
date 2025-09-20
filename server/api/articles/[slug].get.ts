export default defineEventHandler(async (event) => {
  const { slug } = event.context.params as { slug: string }
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'article',
    'fields.slug': slug,
    limit: 1
  })

  const item = res.items[0]
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  return {
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt || '',
    body: item.fields.body || null,
    coverImage: item.fields.coverImage?.fields?.file?.url || null,
    publishedAt: item.fields.publishedAt || null
  }
})

