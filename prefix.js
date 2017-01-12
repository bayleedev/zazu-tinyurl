module.exports = ({clipboard}) => {
  return (query, env = {}) => {
    const url = query || clipboard.readText()
    if (!url.match(/^http/)) {
      return Promise.reject()
    }
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-link',
          title: 'Shorten URL',
          subtitle: url,
          value: url,
        }
      ])
    })
  }
}
