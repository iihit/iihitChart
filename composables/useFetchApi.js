export default async (endpoint, options = {}) => {
  const { headers, ...otherOptions } = options;

  try {
    // const useAuthToken = useAuth()
    // console.log('Request Endpoint:', endpoint)
    // console.log('Request options:', options)
    const response = await $fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...otherOptions,
    })

    return {
      statusCode: response.status,
      data: response
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: error.response.status,
      data: error.response.data,
    }
  }
}
