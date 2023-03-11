<template>
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <!-- Flex Container -->
      <div
        class="container flex flex-col-reverse items-start px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        <!-- Left item -->
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            class="text-2xl font-bold text-center md:text-4xl md:text-left"
          >
            Quick & Easy Background Remover Tool: Remove Image Backgrounds in Seconds
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Remove image backgrounds with ease. Click "Browse" to select your image and let our Background Remover Tool work its magic!
          </p>
          <BGRemover />
          <!-- <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div> -->
        </div>
        <!-- Image -->
        <div class="md:w-1/2">
          <img :src="require('@/assets/img/illustration-intro-rmbg.png')" alt="" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features">
      <!-- Flex container -->
      <div
        class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        <!-- What's Different -->
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's our superpower ?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Our tool is lightning-fast at removing backgrounds from any image, without any need for user selection. With effortless and speedy processing, you can transform your visuals in seconds, creating standout images that make an impact.
          </p>
        </div>

        <!-- Numbered List -->
        <div class="flex flex-col space-y-8 md:w-1/2">
          <!-- List Item 1 -->
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <!-- Heading -->
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Effortless
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Effortless
              </h3>
              <p class="text-darkGrayishBlue">
                Our Background Remover Tool makes removing image backgrounds quick and easy, allowing you to transform your images in just a few clicks.
              </p>
            </div>
          </div>

          <!-- List Item 2 -->
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <!-- Heading -->
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Versatile
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Versatile
              </h3>
              <p class="text-darkGrayishBlue">
                Whether you're editing product photos for your online store, creating social media graphics, or simply removing the background from a personal photo, our tool can help you achieve the results you need.
              </p>
            </div>
          </div>

          <!-- List Item 3 -->
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            <!-- Heading -->
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  High-quality
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                High-quality
              </h3>
              <p class="text-darkGrayishBlue">
                The Background Remover Tool uses advanced algorithms to ensure that the removed background is clean and accurate, resulting in a professional-looking image that's ready to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials">
      <!-- Container to heading and testm blocks -->
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        <!-- Heading -->
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <!-- Testimonials Container -->
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          <!-- Testimonial 1 -->
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img :src="require('@/assets/img/avatar-anisha.png')" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “This tool is amazing! It was so easy to remove the background from my photos, and the results were fantastic. With lightning-fast processing and precise accuracy, my product photos look better than ever.”
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img :src="require('@/assets/img/avatar-ali.png')" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “This tool is a game-changer! It's incredibly easy to use and the results are stunning. With lightning-fast processing and precise accuracy, I can create professional-looking images without the hassle.”
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img :src="require('@/assets/img/avatar-richard.png')" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              "This tool exceeded my expectations! It's lightning-fast, easy to use, and the results are stunning. I highly recommend it to anyone looking for professional-looking images without the hassle."
            </p>
          </div>
        </div>
        <!-- Button -->
        <div class="my-16">
          <router-link
            :to="{name: 'Register'}"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</router-link
          >
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="bg-brightRed">
      <!-- Flex Container -->
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        <!-- Heading -->
        <h2
          class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Remove Backgrounds with the Click of a Button!
        </h2>
        <!-- Button -->
        <div>
          <router-link
            :to="{name: 'Register'}"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pb from '@/services/PocketConfig';
import BGRemover from './components/BGRemover.vue'

export default {
  name: "Home",
  data: () => ({
  }),
  beforeUnmount: function() {
  },
  methods: {
  },
  computed: {
    user: function() {
      if (pb.authStore && pb.authStore.model) return pb.authStore.model
      else return null
    }
  },
  components: {
    BGRemover
  }
}
</script>
<style scoped>
.drag-drop-zone.active {
  border-color: rgb(35, 108, 35);
}
</style>