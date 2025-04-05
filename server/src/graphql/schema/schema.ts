export const GraphQLSchema = `
  scalar Date

  type Post {
    id: ID!
    title: String!
    content: String!
    description: String
    createdAt: Date!
    lastUpdate: Date!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    postId: ID!
    content: String!
    createdAt: Date!
    lastUpdate: Date!
    commentsCount: Int!
  }

  type Query {
    getPosts(id: ID): [Post]
  }

  type Mutation {
    createPost(title: String!, description: String ,content: String!): Post
    updatePost(id: ID!, title: String!, description: String, content: String!): Post
    deletePost(id: ID!): Boolean

    createComment(postId: ID!, content: String!): Comment
    updateComment(id: ID!, content: String!): Comment
    deleteComment(id: ID!): Boolean
  }
`
