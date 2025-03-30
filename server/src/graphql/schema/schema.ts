export const GraphQLSchema = `
  scalar Date

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: Date!
    lastUpdate: Date!
  }

  type Comment {
    id: ID!
    postId: ID!
    content: String!
    createdAt: Date!
    lastUpdate: Date!
    comments: [Comment!]
    commentsCount: Int!
  }

  type Query {
    getPost(id: ID!): Post
    getPosts: [Post]
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
    updatePost(id: ID!, title: String!, content: String!): Post
    deletePost(id: ID!): Boolean

    createComment(postId: ID!, content: String!): Comment
    updateComment(id: ID!, content: String!): Comment
    deleteComment(id: ID!): Boolean
  }
`
