<template>
  <div>
    <div class="gb-gray-100">
      <div class="container mx-auto flex space-x-4 h-100 items-center mb-10">
        <NuxtLink :to="{ name: 'a-empresa' }">A Empresa</NuxtLink>
        <NuxtLink to="/produtos">Produtos</NuxtLink>
        <NuxtLink to="/servicos">Serviços</NuxtLink>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',

        data() {
            return{

            };
        },

        methods: {}
    }
</script>
