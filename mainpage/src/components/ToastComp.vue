// Toast.vue
<template>
  <div>
    <button @click="handleToast">Click Me</button>
    <div v-if="show" class="toast-container">
      <div class="toast-message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastComp",
  props: {
    message: {
      type: String,
      default: "clicked",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleToast() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
};
</script>
