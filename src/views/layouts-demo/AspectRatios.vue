<template>
  <v-flex dir="col" :spaceY="4">
    <v-flex class="w-full" dir="row" justify="between">
      <article class="w-5/12">
        <w-aspect-ratio value="4/3">
          <iframe
            width="1349"
            height="480"
            src="https://www.youtube.com/embed/3u_vIdnJYLc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </w-aspect-ratio>
      </article>
      <article class="w-5/12">
        <w-aspect-ratio value="4/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            alt="demo"
          ></iframe>
        </w-aspect-ratio>
      </article>
    </v-flex>
    <v-flex class="w-full" dir="row" justify="between">
      <article class="w-full">
        <img src="@/assets/img/aflou.jpg" alt="" />
      </article>
    </v-flex>
  </v-flex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WAspectRatio from "@/components/layout/WAspectRatio";
import VFlex from "@/components/layout/VFlex";

export default defineComponent({
  components: { WAspectRatio, VFlex },
});
</script>

<style></style>
