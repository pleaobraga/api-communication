type Props = {
  id: string
  comment: string
}

export async function updateCommentAction({ comment, id }: Props) {
  try {
    const dto = {
      comment
    }

    const response = await fetch(`http://localhost:3002/comments?id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })

    if (!response.ok) {
      throw new Error('Failed to update comment')
    }

    const data = await response.json()

    return { message: '', status: 'success', data }
  } catch (e) {
    console.log('e', e)

    return { message: '', status: 'error' }
  }
}
