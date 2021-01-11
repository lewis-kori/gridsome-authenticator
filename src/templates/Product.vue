<template>
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <SingleProductDetails :product="$page.product" />
        </div>
        <div class="column">
          <QrCode :product="$page.product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleProductDetails from "@/components/Products/SingleProductDetails";
import QrCode from "@/components/Products/QrCode";
export default {
  components: { SingleProductDetails, QrCode },
};
</script>
<page-query>
  query Product($id: ID!) {
      product: strapiProducts(id: $id) {
       id
       name
       description
       image {
           url
					 formats {
						 medium {
							 url
						 }
             small {
               url
             }
					 }
       }
      }
    }
</page-query>
