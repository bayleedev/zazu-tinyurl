module.exports = ({clipboard}) => {
  return (query, env = {}) => {
    const url = query || clipboard.readText()
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-link',
          title: 'Shorten URL',
          subtitle: 'Select to copy the short URL to your clipboard.',
          value: url,
        }
      ])
    })
  }
}
