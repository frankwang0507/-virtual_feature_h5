<template>
  <div class="page-container">
    <div class="nav-bar">
      <NavBar :active="3" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar
  }
};
</script>

<style>
@import './style.less';
</style>
