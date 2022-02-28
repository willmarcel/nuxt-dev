<template>
  <div>

    <div class="gb-gray-100">
      <div class="container mx-auto flex space-x-4 h-100 items-center mb-10">
        <NuxtLink to="/paginas-rotas/a-empresa">A Empresa</NuxtLink>
        <NuxtLink to="/paginas-rotas/servicos">Serviços</NuxtLink>
        <NuxtLink to="/paginas-rotas/produtos">Produtos</NuxtLink>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <h1 class="tetx-lg font-bold">Serviços</h1>

        <br><br>

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
