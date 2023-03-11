<template>
  <div>
    <button @click="incrementCounter">Click me</button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    async incrementCounter() {
      const response = await fetch('http://localhost:3000/api/counter', {
        method: 'POST',
      });
      const data = await response.json();
      this.counter = data.counter;
    },
    async fetchCounter() {
      const response = await fetch('http://localhost:3000/api/counter');
      const data = await response.json();
      this.counter = data.counter;
    },
  },
  created() {
    this.fetchCounter();
  },
};
</script>
