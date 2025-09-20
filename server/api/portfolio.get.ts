export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'portfolioItem',
    order: ['sys.createdAt']
  })

  return res.items.map((item: any) => {
    const f = item.fields || {}
    return {
      id: item.sys.id,
      image: f.image?.fields?.file?.url || null
    }
  })
})

