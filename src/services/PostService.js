import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getAllPosts() {
    const res = await api.get('/api/posts')
    logger.log(res.data)
    AppState.post = res.data.posts
  }

  async getPostByPage() {
    const res = await api.get('/api/posts')
    AppState.postByPage = res.data
  }

  async getBySearch(query) {
    const res = await api.get(`api/posts?query=${query}`)
    logger.log(res.data.posts)
    AppState.post = res.data.posts
  }

  async createPost(body) {
    const res = await api.post('api/posts', body)
    AppState.post.push(res.data)
    return res.data.id
  }

  async destroyPost(id) {
    await api.delete(`api/posts/${id}`)
    AppState.post = AppState.post.filter(p => p.id !== id)
  }
}

export const postService = new PostService()
