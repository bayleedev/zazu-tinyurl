module.exports = () => {
  return (value, env = {}) => {
    return fetch(`http://tinyurl.com/api-create.php?url=${value}`)
      .then((response) => {
        return response.text()
      })
  }
}
