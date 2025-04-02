import { client, db } from './db'
import { comments, posts } from './schema'

async function seed() {
  await db.delete(comments)
  await db.delete(posts)

  const [post] = await db
    .insert(posts)
    .values({
      title: 'New Post',
      description: 'New Description',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'
    })
    .returning()

  await db
    .insert(comments)
    .values([
      {
        postId: post.id,
        content:
          'This introduction is clear and concise, providing a solid foundation for testing typography and layout design'
      },
      {
        postId: post.id,
        content:
          'Great use of classic placeholder text; it maintains a neutral tone suitable for any type of content mockup.'
      },
      {
        postId: post.id,
        content:
          'Perfect length for previewing paragraph styles; it offers enough content to evaluate spacing and readability.'
      }
    ])
    .returning()
}

seed().finally(() => {
  client.end()
})
