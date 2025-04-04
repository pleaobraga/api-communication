'use server'

type Props = {
  id: string
}

export async function deletePostAction({
  id
}: Props): Promise<{ message: string; status: 'error' | 'success' }> {
  try {
    const response = await fetch(`http://localhost:3002/posts?id=${id}`, {
      method: 'DELETE'
    })

    console.log('response', response)

    if (!response.ok) {
      throw new Error('Failed to delete post')
    }

    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
