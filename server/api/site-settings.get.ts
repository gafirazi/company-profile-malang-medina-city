export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({ content_type: 'siteSettings', limit: 1 })
  const fields: any = res.items?.[0]?.fields || {}
  return {
    facebook: fields.facebook || null,
    instagram: fields.instagram || null
  }
})

