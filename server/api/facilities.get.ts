export default defineEventHandler(async () => {
  const { getContentfulClient } = await import('@/server/utils/contentful')
  const client = getContentfulClient()

  // Model suggestion:
  // content_type: 'facility' with fields: label (text), icon (asset), order (number)
  // content_type: 'facilityGallery' with fields: image (asset), description (text), order (number)
  // content_type: 'facilitiesHeading' with fields: title (text), subtitle (text)

  const [iconsRes, galleryRes, headingRes] = await Promise.all([
    client.getEntries({ content_type: 'facility', order: ['fields.order', 'sys.createdAt'] }),
    client.getEntries({ content_type: 'facilityGallery', order: ['fields.order', 'sys.createdAt'] }),
    client.getEntries({ content_type: 'facilitiesHeading', limit: 1 })
  ])

  const items = iconsRes.items.map((it: any) => ({
    label: it.fields?.label || '',
    icon: it.fields?.icon?.fields?.file?.url || null
  }))

  const gallery = galleryRes.items
    .map((it: any) => ({
      image: it.fields?.image?.fields?.file?.url || null,
      description: it.fields?.description || ''
    }))
    .filter((g: any) => Boolean(g.image))
  const heading: any = headingRes.items?.[0]?.fields || {}

  return { items, gallery, title: heading.title || null, subtitle: heading.subtitle || null }
})

