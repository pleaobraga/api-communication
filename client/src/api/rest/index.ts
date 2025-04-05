import * as restComment from './comment-rest-api'
import * as restPost from './post-rest-api'

export const restAPI = { ...restComment, ...restPost }
