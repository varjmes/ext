'use strict'

const getExtension = (filename) => {
  let result = filename
  const matches = filename.match(/\.\w+/g)
  if (matches) result = matches[matches.length - 1]
  return result.toLowerCase()
}

const ext = (filenames) => {
  if (!filenames) return ''

  if (Array.isArray(filenames)) {
    return filenames.map(getExtension)
  }

  return getExtension(filenames)
}

module.exports = ext
