<script setup lang="ts">
const route = useRoute()

const hintNumber = ref(0)
const validated = ref(false)
const senha = ref('')
const triedPasswords = ref<string[]>([])
const dicas = [
  'A senha contém 8 letras',
  'Pode se dizer que ela rima com melodia',
  'A senha é algo que temos (essa ja foi?)',
  'É algo que sentimos quando trabalhamos bem juntos',
  'Fome não tem 8 letras',
  'A origem da palavra é grega',
  'Sinonimo de parceria',
  'É uma palavra legal',
  'A palavra não contém a letra T',
  'Precisa de no mínimo 2 algos para acontecer',
  'O Arthur frequentemente esquece essa palavra',
  'Cara não é possível que você não tenha acertado ainda, última dica: não é Elefante',
]
function tentar() {
  if (senha.value.toLowerCase() === 'sinergia') {
    validated.value = true
  } else if (!triedPasswords.value.includes(senha.value)) {
    hintNumber.value++
    triedPasswords.value.push(senha.value)
  }
}
</script>

<template>
  <div >
    <div v-if="!validated" class="he-min-100vh  d-flex flex-column justify-center align-center ">

      <v-row justify="center" align="center" class="mx-4 mx-md-0">
        <v-col cols="12" md="6">
          <v-row justify="center" align="center">
            <v-col cols="12" class="d-flex flex-column mt-md-0">
              <div class="text-h3 mt-4 mb-10 text-center">Para receber a mensagem de seu <span class="text-primary">amor</span>...</div>
              <div class="text-h4 text-center mb-5 ">Digite a senha</div>
              <div class="text-h5 font-weight-thin ">A senha é algo que temos</div>
              <v-text-field variant="solo" rounded="pill" v-model="senha" label="Senha" color="primary"  class="mt-2"></v-text-field>
              <div class="my-2">
                <v-btn color="primary" size="x-large" class="my-5" prepend-icon="mdi-check" block target="_blank"
                  @click="tentar">Tentar</v-btn>
              </div>
            </v-col>
            <v-col cols="12" >
              <v-list v-if="hintNumber" two-line>
                <v-list-item v-for="(dica, index) in dicas" :key="index" two-line>
                      <v-list-item-subtitle v-if="(index + 1) <= hintNumber" class="text-h6 text-nowrap">{{ dica }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </div>
    <v-fade-transition> 
      <v-container v-if="validated"  class="text-h6 font-weight-regular  d-flex justify-center">
        <v-card width="800px" rounded="xl" class="pa-10">
 <div class="mb-4">      Já que as primeiras linhas desse texto têm se provado uma tarefa quase impossível de conquistar, vou optar por falar de gatos. </div>
 <div class="mb-4">      Já notou o quanto nossos gatos são diferentes? </div>
 <div class="mb-1">      A Maya é peluda, cara larga, dada e adora um colo. </div>
 <div class="mb-1">      O Boris não é peludo, é slim, reservado, e deus me livre se alguém pega ele. </div>
 <div class="mb-4">      Eles têm personalidades diferentes (não tanto assim), mas é nítida a sinergia que os dois têm. </div>
 <div class="mb-4">      Essa é a palavra que quero dedicar ao nosso sexto Dia dos Namorados: <span class="text-primary">Sinergia.</span> </div>
 <div class="mb-4">      A gente é assim também. </div>
 <div class="mb-4">      Eu adoro que na nossa dinâmica, juntamos dois pontos de vista para ter uma visão mais abrangente. </div>
 <div class="mb-4">      Eu adoro discutir (e ser lecionado) sobre coisas de saúde, nutrição e biologia contigo. </div>
 <div class="mb-4">      Eu adoro quando tira umas referências de coisas que eu não fazia ideia que existiam. </div>
 <div class="mb-4">      Eu adoro poder fazer coisas que eu amo fazer, sendo que essas mesmas coisas te agradam. </div>
 <div class="mb-4">      Eu adoro poder te ensinar algumas coisas também. </div>
 <div class="mb-6">      Eu adoro VOCÊ, e te amo também muito, muito, muito :) </div>
 <div class="">     Você não precisa me completar, já temos sinergia! </div>
</v-card>
      </v-container>
    </v-fade-transition>
  </div>
</template>
<style>
.he-min-100vh {
  min-height: 100vh;
}

.blur {
  backdrop-filter: blur(4px);
}

p {
  margin-bottom: 2rem;
}
</style>