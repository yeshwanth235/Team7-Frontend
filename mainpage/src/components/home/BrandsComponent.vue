<template>
  <div class="Brands">
    <div >
        <img src="../../assets/brands/oppo.jpg" alt="oppo" />
    </div>

    <div>
        <img src="../../assets/brands/pixel.jpg" alt="pixel" />
    </div>
    <div>
        <img src="../../assets/brands/poco.jpg" alt="poco" />
    </div>
    <div>
        <img src="../../assets/brands/realme.jpg" alt="realme" />
    </div>
    <div>
        <img src="../../assets/brands/vivo.jpg" alt="vivo" />
    </div>

    <!-- <a href="">
            <img src="../assets/brands/xiamoi.jpg" alt="xiamoi">
        </a> -->
  </div>
</template>

<script>
export default {
  name: "BrandsComponent.vue",
};
</script>

<style scoped>
.Brands {
    display: flex;
  margin: 30px 0;
}

img {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 30px 30px;
}
</style>
