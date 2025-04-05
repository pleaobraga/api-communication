const HEADERS = {
  'Content-Type': 'application/json'
}

export function apiRestClient() {
  async function get(url: string): Promise<any> {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to get')
    }

    const data = await response.json()

    return data
  }

  async function post(url: string, dto: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(dto)
    })

    if (!response.ok) {
      throw new Error('Failed to post')
    }

    const data = await response.json()

    return data
  }

  async function put(url: string, dto: any): Promise<any> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(dto)
    })

    if (!response.ok) {
      throw new Error('Failed to update')
    }

    const data = await response.json()

    return data
  }

  async function del(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Failed to delete')
    }
  }

  return {
    get,
    post,
    put,
    delete: del
  }
}
