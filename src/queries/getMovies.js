const query = `
  query(contentTypes: "%application%:movie", query: "valid='true'", first: 100) {
    name: _name
    id: _id
    displayName
    ... on %application%_Movie {
      data {
        subtitle
        release
        abstract
        trailer
        photos {
          ... on media_Image {
            url_w800: imageUrl(type: absolute, scale: "width(800)")
            attachments {
              name
            }
          }  
        }
      }
    }
  }
`

module.exports = query;