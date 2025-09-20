export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'hero',
    limit: 1
  })

  const item: any = res.items?.[0]
  const fields = item?.fields || {}
  return {
    title: fields.title || '',
    subtitle: fields.subtitle || '',
    ctaText: fields.ctaText || '',
    ctaLink: fields.ctaLink || '',
    bgImage: fields.bgImage?.fields?.file?.url || null
  }
})

