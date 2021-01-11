<template>
  <Layout>
    <div class="columns is-mobile is-multiline">
      <div
        v-for="product in $page.products.edges"
        :key="product.node.id"
        class="column is-one-third is-half-mobile"
      >
        <SingleProduct :product="product.node" />
      </div>
    </div>
  </Layout>
</template>

<script>
import SingleProduct from "@/components/Products/SingleProduct";
export default {
  components: { SingleProduct },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
  products: allStrapiProducts {
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
}
</page-query>
