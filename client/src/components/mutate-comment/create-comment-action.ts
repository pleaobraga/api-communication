type Props = {
  postId: string
  comment: string
}

export async function createCommentAction({ comment, postId }: Props) {
  try {
    const dto = {
      postId,
      content: comment
    }

    const response = await fetch(`http://localhost:3002/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })

    if (!response.ok) {
      throw new Error('Failed to create comment')
    }

    const data = await response.json()

    return { message: '', status: 'success', data }
  } catch (e) {
    console.log('e', e)

    return { message: '', status: 'error' }
  }
}
