<template>
  <div class="wrapper">
    <router-view></router-view>
<!--    <div class="wrapper-content">-->
<!--      <section>-->
<!--        <div class="container">-->
<!--          <h1>Hello modals</h1>-->
<!--          <button class="btn btnPrimary" @click="showFirstModal = !showFirstModal">Open first modal</button>-->
<!--          <Modal title="First modal" v-if="showFirstModal" @close="showFirstModal = !showFirstModal">-->
<!--            <div slot="body">Hello new slot body</div>-->
<!--          </Modal>-->
<!--        </div>-->
<!--      </section>-->

<!--    </div>-->
  </div>
</template>

<script>


import Modal from "@/components/Modal.vue";

export default {
  components: {Modal},

  data() {
    return {
      showFirstModal: false
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
