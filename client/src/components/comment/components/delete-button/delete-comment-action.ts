'use server'

type Props = {
  id: string
}

export async function deleteCommentAction({
  id
}: Props): Promise<{ message: string; status: 'error' | 'success' }> {
  try {
    const response = await fetch(`http://localhost:3002/comments?id=${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Failed to delete Comment')
    }

    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
