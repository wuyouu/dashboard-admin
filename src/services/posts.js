/**
 * Posts service
 */

import Resource from './resource'

class Posts extends Resource {
  constructor () {
    super('posts')
  }
}

export default new Posts()
