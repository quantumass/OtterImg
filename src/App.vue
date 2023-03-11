<template>
  <component :is="layout">
    <FadeInOut entry="center" exit="center" :duration="500" mode="out-in">
      <router-view></router-view>
    </FadeInOut>
  </component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.vue";
import { FadeInOut } from 'vue3-transitions';
import pb from '@/services/PocketConfig';
import { getToast, logError } from '@/utils/helpers'

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout || "default-layout";
    },
  },
  components: {
    DefaultLayout,
    FadeInOut
  },
  watch: {
    $route: function() {
      this.checkQuery()
    }
  },
  mounted() {
    // let htmlElem = document.querySelector('html')
    // htmlElem.classList.add('dark')
    this.checkQuery()
  },
  methods: {
    checkQuery: function() {
      if (this.$route.query["confirm-verification"]) {
        let token = this.$route.query["confirm-verification"]
        pb.collection('users').confirmVerification(token).then(() => {
          getToast(this).fire({
            icon: "success",
            title: "you have confirmed your account successfuly"
          });
          this.$router.push({ name: "Login" })
        }).catch(error => {
          logError(this, error)
        });
      }
    }
  }
};
</script>

<style></style>
