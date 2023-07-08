// Environment: server
import {mapToDomain} from "./movies.mapper";

export {onBeforeRender};

// `movies` will be serialized and passed to the browser; we select only the data we
// need in order to minimize what is sent to the browser.

async function onBeforeRender() {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const response = await fetch("http://www.omdbapi.com/?apikey=ad06eb84&s=star%20wars");

  const {Search} = await response.json();

  const movies = mapToDomain(Search);

  return {
    pageContext: {
      // We make `movies` available as `pageContext.pageProps.movies`
      pageProps: {
        movies,
        generatedAt: new Date().toISOString()
      }
    }
  };
}
