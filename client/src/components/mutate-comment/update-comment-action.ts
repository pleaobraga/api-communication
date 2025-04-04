'use server'

type Props = {
  id: string
  comment: string
}

export async function updateCommentAction({ comment, id }: Props) {
  try {
    const dto = {
      content: comment
    }

    const response = await fetch(`http://localhost:3002/comments?id=${id}`, {
      method: 'PUT',
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
    return { message: '', status: 'error' }
  }
}
