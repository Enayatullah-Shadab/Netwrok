import { AppState } from '../AppState.js'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdsService {
  async getAllAds() {
    const res = await api.get('/api/ads')
    // logger.log(res.data)
    AppState.adds = res.data
  }
}

export const adsService = new AdsService()
