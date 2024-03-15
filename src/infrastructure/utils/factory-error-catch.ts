function factoryErrorCatch(error) {
  if (error?.response?.data) {
    const {
      response: { data },
    } = error

    console.error(data.message)

    return
  }

  if (error?.message) {
    console.error('Exception error: ', error.message, error.code)
    return
  }

  console.error(error)
}

export default factoryErrorCatch
