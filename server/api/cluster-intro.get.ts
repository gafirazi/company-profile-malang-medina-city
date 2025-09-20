export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'clusterIntro',
    limit: 1
  })

  const item: any = res.items?.[0]
  const f = item?.fields || {}

  return {
    title: f.title || '',
    tagline: f.tagline || '',
    desc1: f.desc1 || '',
    desc2: f.desc2 || '',
    image: f.image?.fields?.file?.url || null,
    instagram: f.instagram || null,
    facebook: f.facebook || null,
    whatsapp: f.whatsapp || null
  }
})

