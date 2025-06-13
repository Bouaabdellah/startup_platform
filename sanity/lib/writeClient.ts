import 'server-only'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // false => dynamic fetching, if it is true => using ISR or tag-based revalidation
  token
})
