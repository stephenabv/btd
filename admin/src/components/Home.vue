<template>
    <div>
        <button class="home-btn">
            <router-link to="/dashboard" class="nav-link"><i class="fa fa-home"></i></router-link>
        </button>
    </div>
</template>

<script>
export default{
    name: 'HomeVue'
}
</script>

<style scoped>
.home-btn {
  border: none;
  background-color: transparent;
  color: #8f9190;
  font-size: 40px;
  cursor: pointer;
  margin: 2rem 3rem;
}

.home-btn:hover {
  color: #04ff2a;
}

</style>