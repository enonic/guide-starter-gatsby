const query = `{
  guillotine {
    query(contentTypes: "%application%:person", query: "valid='true'", first: 100) {
      name: _name
      id: _id
      displayName
      ... on %application%_Person {
        data {
          bio
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
  }
}`

module.exports = query;
