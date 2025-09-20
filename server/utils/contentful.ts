import { createClient, type CreateClientParams } from 'contentful'

export const getContentfulClient = (preview: boolean = false) => {
  const config = useRuntimeConfig()

  const token = preview ? config.contentful.previewToken : config.contentful.cdaToken

  // Basic validation to surface misconfiguration early in dev
  if (!config.contentful.spaceId || !token) {
    throw new Error('[Contentful] Missing credentials. Check CONTENTFUL_* env vars.')
  }

  const params: CreateClientParams = {
    space: config.contentful.spaceId as string,
    environment: (config.contentful.environment as string) || 'master',
    accessToken: token as string,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  }

  return createClient(params)
}

