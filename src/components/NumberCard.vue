<template>
  <div>
    <div
      ref="block"
      class="max-w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center h-[400px]"
    >
      <a>
        <h5
          class="mb-2 text-[85px] font-bold tracking-tight text-gray-900 dark:text-white text-center"
        >
          <transition name="count" appear>
            <span v-if="isVisible" class="count-animation">{{
              animatedNumber
            }}</span>
          </transition>
        </h5>
      </a>
      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[45px] pt-[50px]"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "number"],
  data() {
    return {
      animatedNumber: 0,
      isVisible: false,
    };
  },
  mounted() {
    const options = {
      threshold: 0.5, // Set the threshold to 0.5 or any value that suits your needs
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$refs.block);
  },
  methods: {
    animateNumber() {
      const duration = 8000; // Animation duration in milliseconds
      const step = Math.ceil(this.number / (duration / 60)); // Calculate the increment step

      let currentNumber = 0;
      const interval = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= this.number) {
          clearInterval(interval);
          currentNumber = this.number;
        }
        this.animatedNumber = currentNumber;
      }, 16);
    },
    handleIntersect(entries) {
      if (entries[0].isIntersecting) {
        this.isVisible = true;
        this.animateNumber();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.count-animation {
  transition: 1s;
  animation: countAnimation 1s linear;
}

@keyframes countAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
