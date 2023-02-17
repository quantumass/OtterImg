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
            class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Upscale and Enhance Your Images Using AI
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            We use state-of-the-art AI to upscale and enhance images.
          </p>

          <form class="mb-2">
            <input 
              type="file" 
              name="file" 
              ref="image" 
              id="file" 
              class="sr-only"
              @change="onFileChange" 
              accept="image/*"
            />
            <label
              :for="!isLoading ? 'file' : ''"
              class="relative bg-white flex min-h-[200px] items-center justify-center rounded-md border-2 border-dashed border-[#e0e0e0] text-center"
              :class="[!isLoading ? 'p-12' : '']"
            >
              <img 
                v-if="!isLoading"
                :src="require('@/assets/img/upload.png')" 
                class="absolute bottom-0 left-0 lg:w-52 w-0 m-2" 
              />
              <div v-if="!isLoading">
                <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                  Drop files here
                </span>
                <span class="mb-2 block text-base font-medium text-[#6B7280]">
                  Or
                </span>
                <span
                  class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                >
                  Browse
                </span>
              </div>
              <div v-else class="w-full">
                <!-- follow me on twitter @asad_codes -->
                <div class="flex flex-wrap place-items-center w-full">
                    <!-- card -->
                    <div class="shadow-lg rounded-xl p-4 bg-white relative overflow-hidden w-full">
                        <div class="w-full h-full block">
                            <div class="w-full">
                                <p class="text-gray-800 text-sm font-medium mb-2">
                                    Working On:
                                </p>
                                <p class="text-gray-800 text-xl font-medium mb-2">
                                  <loader :title="tasks[step].title" :isLoading="step == 6 ? false : isLoading" />  
                                </p>
                                <p class="text-gray-400 text-sm mb-4">
                                  {{ tasks[step].description }}
                                </p>
                            </div>
                            <div class="flex items-center justify-between my-2">
                                <p v-if="step < 6" class="text-gray-300 text-sm">
                                    {{ step + 1 }}/6 task completed
                                </p>
                                <p v-else class="text-gray-300 text-sm">
                                    completed
                                </p>
                            </div>
                            <div class="w-full h-2 bg-blue-200 rounded-full">
                                <div v-if="step < 6" :class="`w-${step + 1}/6 h-full text-center text-xs text-white bg-blue-600 rounded-full`">
                                </div>
                                <div v-else :class="`w-full h-full text-center text-xs text-white bg-green-600 rounded-full`">
                                </div>
                            </div>
                            <div v-if="step == 6 && image" class="mt-2">
                                <loader v-if="!isImageLoaded && !isImageError" title="loading ..." :isLoading="true" ></loader>
                                <div v-show="isImageLoaded || isImageError">
                                  <ImgComparisonSlider class="shadow-lg">
                                    <img slot="first" style="width: 100%" :src="image.publicSrc" alt="" />
                                    <img slot="second" style="width: 100%" :src="image.optimizedPublicSrc" @load="isImageLoaded = true" @error="isImageError = true" alt="" />
                                  </ImgComparisonSlider>
                                  <a target="_blank" :href="image.optimizedPublicSrc" :download="image.convertedImage" class="bg-black-900 inline-flex  items-center text-white w-full mt-2 py-2 px-4 rounded hover:bg-black-600">
                                    <font-awesome-icon :icon="['fas', 'download']" class="mr-2 w-4" />
                                    DOWNLOAD
                                  </a>
                                  <button @click="retry" class="bg-brightRed inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded">
                                    <font-awesome-icon :icon="['fas', 'arrows-rotate']" class="mr-2 w-4" />
                                    Try another one
                                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </label>
          </form>
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
          <img :src="require('@/assets/img/illustration-intro.png')" alt="" />
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
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
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
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p class="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
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
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
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
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
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
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img :src="require('@/assets/img/avatar-ali.png')" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img :src="require('@/assets/img/avatar-richard.png')" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <!-- Button -->
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
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
          Simplify how your team works today
        </h2>
        <!-- Button -->
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import pb from '@/services/PocketConfig';
import { logError, getToast } from '@/utils/helpers'

import { RouterLink } from "vue-router";
import WButton from "@/components/actions/WButton.vue";
import Card from "@/components/surface/Card";
import VueLogo from "@/components/util/VueLogo";
import TailwindLogo from "@/components/util/TailwindLogo";
import VFlex from "@/components/layout/VFlex";
import IconModel from "@/components/icons/IconModel";
import IconContainerSoftware from "@/components/icons/IconContainerSoftware";
import IconMoon from "@/components/icons/IconMoon";
import WAvatar from "@/components/data-display/WAvatar.vue";
import IconNotification from "@/components/icons/IconNotification";
import IconHome from "@/components/icons/IconHome";
import IconChat from "@/components/icons/IconChat";
import WIconWithBadge from "@/components/data-display/WIconWithBadge.vue";
import IconShoppingCart from "@/components/icons/IconShoppingCart";
import IconFavorite from "@/components/icons/IconFavorite";
import WBadge from "@/components/data-display/WBadge.vue";
import WGrid from "@/components/layout/Grid";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: "Home",
  data: () => ({
    step: 0,
    tasks: [{
        "title": "Uploading image",
        "description": "We are currently uploading your image to our AI server."
    }, {
        "title": "Analyzing image",
        "description": "We are analyzing your image to determine the best enhancement methods."
    }, {
        "title": "Enhancing image",
        "description": "We are now applying enhancement algorithm to your image."
    }, {
        "title": "Super Resolution",
        "description": "Applying Super Resolution algorithm for even clearer results."
    }, {
        "title": "Saving image",
        "description": "We are now saving the enhanced image for you."
    }, {
        "title": "About To finish",
        "description": "About to finish processing your image, be ready"
    }, {
        "title": "Finished",
        "description": "You can also check your images on your profile page"
    }],
    image: null,
    loadingInterval: null,
    isImageLoaded: false,
    isImageError: false,
    isLoading: false
  }),
  beforeUnmount: function() {
    clearInterval(this.loadingInterval)
  },
  methods: {
    retry: function() {
      this.step = 0
      this.image = null
      this.loadingInterval = null
      this.isLoading = false
      this.isImageLoaded = false
      this.isImageError = false
      this.$refs.image.value = "";
    },
    onFileChange: async function() {
      if (this.user) {
        this.isLoading = true
        let formData = new FormData();
        formData.append('image', this.$refs.image.files[0]);
        formData.append('user', this.user.id)
        try {
          this.image = await pb.collection('images').create(formData);
          pb.collection('images').subscribe(this.image.id, (e) => {
            this.image = e.record
            this.image.publicSrc = `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${this.image.id}/${this.image.image}`,
            this.image.optimizedPublicSrc = `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${this.image.id}/${this.image.convertedImage}`
            if (e.record.isProcessing && !e.record.isReady) {
              if (this.step == 1) this.step = 2
              this.loadingInterval = setInterval(() => {
                if (this.step < 6) this.step += 1
              }, 4000)
            } else if (e.record.isReady) {
              //clearInterval(this.loadingInterval)
              this.step = 6
            }
          });
          this.step = 1
        } catch (error) {
          logError(this, error)
          clearInterval(this.loadingInterval)
          this.isLoading = false
        }
      } else {
        getToast(this).fire({
            icon: 'warning',
            title: "Login to your account first !"
        });
        this.$router.push({ name: "Login" })
      }
    }
  },
  computed: {
    user: function() {
      if (pb.authStore && pb.authStore.model) return pb.authStore.model
      else return null
    }
  },
  components: {
    ImgComparisonSlider,
    Card,
    "w-btn": WButton,
    VueLogo,
    TailwindLogo,
    VFlex,
    WGrid,
    WAvatar,
    IconModel,
    IconContainerSoftware,
    IconNotification,
    IconMoon,
    IconHome,
    IconChat,
    WIconWithBadge,
    IconFavorite,
    IconShoppingCart,
    WBadge,
  },

}
</script>
