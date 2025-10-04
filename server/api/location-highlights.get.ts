export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  const res = await client.getEntries({
    content_type: 'locationHighlights',
    limit: 1
  })

  const item: any = res.items?.[0]
  const f = item?.fields || {}

  const metrics = Array.isArray(f.metrics)
    ? f.metrics.map((m: any) => ({
        num: typeof m?.num === 'number' ? m.num : Number(m?.num ?? 0),
        caption: typeof m?.caption === 'string' ? m.caption : String(m?.caption ?? '')
      }))
    : []

  return {
    title: f.title || '',
    subtitle: f.subtitle || '',
    metrics,
    bigMap: f.bigMap?.fields?.file?.url || null,
    rightTitleStrong: f.rightTitleStrong || '',
    rightTitleNormal: f.rightTitleNormal || '',
    rightParagraph: typeof f.rightParagraph === 'string' ? f.rightParagraph : ''
  }
})

