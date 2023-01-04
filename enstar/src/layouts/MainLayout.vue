<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">

      <q-toolbar>
        <div class="q-mr-lg q-pt-sm">
          <img alt="logo" src="enstar_logo.png" height="50">
        </div>
        <div class="q-px-md">
          <q-btn label="Projects" to="projects" />
        </div>
        <div class="q-px-md">
          <q-btn label="Your Wallet" to="wallet" />
        </div>

        <q-toolbar-title />

        <q-input dark borderless v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>

        <div class="q-px-md">
          <q-btn label="Connect Wallet" @click="connect" />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <the-footer />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TheFooter from 'components/TheFooter.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    TheFooter
  },

  setup() {
    return {
      text: ref(''),
      connect() {
        console.log("connect wallet")
      }
    }
  }
})
</script>
