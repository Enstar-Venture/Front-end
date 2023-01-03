<template>
  <q-page>
    <q-card class="my-card" flat bordered style="width: 100%">
      <q-card-section horizontal>
        <q-card-section class="col-7">
           <div class="q-ma-xl q-pa-xl">
             <div class="text-h2">
               Get early access to the ideas of tomorrow
             </div>
             <div class="q-pt-xl text-h5">
               Highly-vetted Web3 projects you can trust. Supported by industry-leading creators and funds.
             </div>

           </div>
        </q-card-section>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>
    <div class="q-my-lg row flex-center q-gutter-xl">
      <template v-for="i in 4">
        <q-card class="col-2 text-center">
          <q-card-section class="text-h4">
            121
            <div class="text-h5">
              Ideas Funded
            </div>
          </q-card-section>
        </q-card>
      </template>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
