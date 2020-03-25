const query = `{
  guillotine {
    query(contentTypes: "%application%:movie", query: "valid='true'", sort: "displayName") {
      id: _id
      displayName
      name: _name
      ... on %application%_Movie {
        data {
          subtitle
          abstract
          photos {
            ... on media_Image {
              imageUrl: imageUrl(type: absolute, scale: "width(800)")
              attachments {
                altImageText: name
              }
            }  
          }
        }
      }
    }
  }
}
`

module.exports = query;
