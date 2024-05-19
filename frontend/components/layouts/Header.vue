<!-- src/components/common/Header.vue -->
<template>
  <nav className="navbar flex bg-base-100 mx-auto max-w-7xl mt-4 p-4 shadow-xl rounded-box justify-between">
    <div className="navbar-start">
      <button @click="handleToHome" class="px-4 py-2 font-semibold">WeRoad Travel</button>
    </div>
    <div className="navbar-end">
      <!-- TODO: only show "Create" button for admin users -->
      <button @click="handleToNewTravel" class="bg-red-700 text-white px-4 py-2 rounded">+ Create New Travel</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const handleToNewTravel = () => {
  router.push('/create-travel');
};

const handleToHome = () => {
  router.push('/');
};
</script>