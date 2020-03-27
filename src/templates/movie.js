import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {getPageTitle} from "../helpers/helper";

const MoviePage = (args) => {
    const { pageContext } = args;
    const movie = pageContext.node;
    const movieMeta = movie.data;

    return (
      <Layout>
        <SEO title={getPageTitle(pageContext)} />
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline'
          }}>
            <h2>{movie.displayName}
              {movieMeta.release && (
                <i style={{
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '24px',
                  marginLeft: '10px',
                  opacity: '0.7'
                }}>({new Date(movieMeta.release).getFullYear()})</i>
              )}
            </h2>
          </div>
          <div style={{
            display: `flex`
          }}>
            <img
              style={{
                maxWidth: '400px',
                width: '50%'
              }}
              src={movieMeta.photos[0].imageUrl} title={movieMeta.subtitle} alt={movieMeta.photos[0].attachments[0].altImageText} />
            <p style={{
              margin: `0 20px`
            }}><i>{movieMeta.abstract}</i></p>
          </div>
        </div>
        <p>
          <Link to={`${pageContext.listPageUrl}`}>Back to Movies</Link>
        </p>
      </Layout>
    )
};

export default MoviePage
