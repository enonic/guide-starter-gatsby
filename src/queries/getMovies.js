const query = `{
  guillotine {
    query(contentTypes: "%application%:movie", query: "valid='true'", sort: "displayName") {
      id: _id
      displayName
      name: _name
      ... on %application%_Movie {
        data {
          release
          subtitle
          abstract
          photos {
            ... on media_Image {
              imageUrl: imageUrl(type: absolute, scale: "width(300)")
              attachments {
                imageText: name
              }
            }  
          }
          cast {
            character
            actor {
              id: _id
              name: _name
              displayName
              ... on com_example_myproject_Person {
                data {
                  photos {
                    ... on media_Image {
                      imageUrl: imageUrl(type: absolute, scale: "square(300)")
                    }
                  }
                }
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
