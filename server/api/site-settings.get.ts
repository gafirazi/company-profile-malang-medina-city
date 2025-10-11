export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  // Multiple entries of content_type `siteSettings` with fields: icon (Asset), url (string), order (number)
  const res = await client.getEntries({ content_type: 'siteSettings', order: ['fields.order', 'sys.createdAt'] })
  return res.items
    .map((it: any) => {
      const f = it?.fields || {}
      const iconUrl = f?.icon?.fields?.file?.url || null
      const linkUrl = typeof f?.url === 'string' ? f.url : ''
      const order = typeof f?.order === 'number' ? f.order : null
      return { icon: iconUrl, url: linkUrl, order }
    })
    .filter((l: any) => Boolean(l.url))
})

