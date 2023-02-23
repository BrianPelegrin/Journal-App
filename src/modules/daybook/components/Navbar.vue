<template>
  <nav class="navbar bg-primary">
    <a href="#" class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="logo"
        height="25"
        class="d-inline-block align-text-top mx-2"
      />
      Daybook</a
    >
    <div class="d-flex">
      <button
        @click="$router.push({ name: 'home' })"
        class="btn btn-outline-info mx-2"
      >
        <strong>Logout</strong> <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
