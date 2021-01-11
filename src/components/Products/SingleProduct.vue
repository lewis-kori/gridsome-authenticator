<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{product.name}}</p>
    </header>
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="appendImageUrl(product.image.formats.thumbnail.url)"
          :alt="product.name"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        {{ sliceText(product.description) }}
      </div>
    </div>
    <footer class="card-footer">
      <b-button tag="router-link" :to="productUrl(product.id)" type="card-footer-item is-primary is-light is-small" expanded
        >View</b-button
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
  props: {
    product: {
      type: Object,
      default: {
        image: {
          url: "https://picsum.photos/200/300",
        },
      },
    },
  },
  methods: {
    sliceText(text) {
      return `${text.slice(0, 200)}...`;
    },
    appendImageUrl(url) {
      return `http://localhost:1337${url}`;
    },
    productUrl(id){
      return `/products/${id}/`
    }
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content {
  height: 100%;
}
</style>
