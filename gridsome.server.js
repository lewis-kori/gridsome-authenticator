// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({  graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allStrapiProducts {
        edges {
          node {
            id
            name
            description
            image {
              url
              formats {
                thumbnail {
                  url
                }
              }
            }
          }
        }
      }
    }`);
    const products = data.allStrapiProducts.edges;

    products.forEach(product => {
      createPage({
        path: `/products/${product.node.id}`,
        component: './src/templates/Product.vue',
        context: {
          id: product.node.id
        }
      })
    });
  })
}
