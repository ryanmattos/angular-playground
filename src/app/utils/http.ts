import { environment } from '../../environments/environment'

const { baseUrl: BASE_URL } = environment

function resolveUrl(path?: string) {
   return `${BASE_URL}${resolvePath(path)}`
}

function resolvePath(path?: string) {
   if (!path) return '/'
   return `${path?.indexOf('/') === 0 ? '' : '/'}${path}`
}

export default {
   resolver: resolveUrl
}