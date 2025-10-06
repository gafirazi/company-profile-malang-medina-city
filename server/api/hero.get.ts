export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'hero',
    limit: 1,
    order: ['-sys.updatedAt']
  })

  const item: any = res.items?.[0]
  const fields = item?.fields || {}
  const rawUrl: string | null = fields.bgImage?.fields?.file?.url || null
  const normalizedUrl = rawUrl ? (rawUrl.startsWith('http') ? rawUrl : `https:${rawUrl}`) : null
  return {
    title: fields.title || '',
    titleColor: fields.titleColor || null,
    subtitle: fields.subtitle || '',
    ctaText: fields.ctaText || '',
    ctaLink: fields.ctaLink || '',
    bgImage: normalizedUrl
  }
})

