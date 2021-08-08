import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfileBySearch(query = {}) {
    const res = await api.get('/api/profile')
    AppState.profile = res.data
  }

  async getProfileById(id) {
    const res = await api.get('/api/profile/id')
    AppState.profile = res.data
  }

  async getPostsByProfile(id) {
    this.getPostsByProfile(id)
    const res = await api.get('/api/profile/id/posts')
    AppState.profile = res.data
  }
}
export const profileService = new ProfileService()
