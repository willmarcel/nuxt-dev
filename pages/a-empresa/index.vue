<template>
  <div>
    <h1 class="tetx-lg font-bold">A Empresa</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus eos et eum eveniet harum ipsa porro quia rem veritatis! Ad beatae commodi cupiditate dignissimos iste magni perferendis quasi, repudiandae.</p>
  </div>
</template>

<script>
    export default {
        name: '',

        // Executa antes do carregamento da pagina
        // Middleware anonimo: É chamado como function
        // middleware() {
        //   console.log('midd a empresa');
        // },

        //Middleware Nomeado: é chamado como propriedade
        // middleware: 'auth',

        // Middlewate Router: é declarado lá no nuxt.config.js

        data() {
            return{

            };
        },

        methods: {}
    }
</script>
