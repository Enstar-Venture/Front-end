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
    <div class="q-py-xl text-center text-h4">
      HELPING THE POTENTIAL PROJECTS RAISE FUNDING
    </div>
    <div class="row flex-center q-gutter-xl">
      <template v-for="i in 4">
        <q-card class="col-5">
          <q-card-section horizontal>
            <q-card-section class="col-4 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <div class="q-mt-md text-h5 text-green">
                +2,610%
              </div>
            </q-card-section>
            <q-card-section class="column col-8 flex">
              <div class="text-h5 text-center">Project Name</div>
              <div class="text-h6">Company Name</div>
              <q-separator/>
              <div class="text-h6">
                Project Introduction...
              </div>
              <div class="text-h6">
                Type: Zero Cost SHO
              </div>
              <div class="text-h6">
                Category: DApp, Drive to Earn
              </div>
              <div class="text-h6">
                Total Raised:
              </div>
              <div class="text-h6">
                Participants:
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </template>

    </div>
    <div class="q-my-xl flex flex-center">
      <q-btn label="Explore Projects" to="projects" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
