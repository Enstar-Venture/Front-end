<template>
  <div class="q-pa-md">
    <div class="row items-start justify-between">
      <template v-for="footerLink of footerLinks">
        <div class="col-2">
          <div class="text-h5 q-pl-sm">{{footerLink.label}}</div>
          <div class="column items-start ">
            <template v-for="item of footerLink.items">
              <q-btn flat :label="item.label" :to="item.link"/>
            </template>
          </div>

        </div>
      </template>
      <div class="col-3 column items-end">
        <div class="q-mr-lg q-pt-sm">
          <img alt="logo" src="enstar_logo.png" height="50">
        </div>
        <div class="text-h6">
          Slogan Slogan Slogan
        </div>
      </div>
    </div>
    <div class="q-pa-lg row justify-between">
      <div class="q-pt-sm q-gutter-md items-center">
        <q-icon name="fa-brands fa-twitter" size="sm"/>
        <q-icon name="fa-brands fa-telegram" size="sm"/>
        <q-icon name="fa-brands fa-discord" size="sm"/>
        <q-icon name="fa-brands fa-instagram" size="sm"/>
        <q-icon name="fa-brands fa-youtube" size="sm"/>
        <q-icon name="fa-brands fa-linkedin" size="sm"/>
        <q-icon name="fa-brands fa-github" size="sm"/>
      </div>
      <div class="text-right">
        <q-btn label="Buy Star"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
const footerLinks = [
  {
    label: "Company",
    items: [
      {
        label: "Careers",
        link: "careers"
      },
      {
        label: "About us",
        link: "about"
      }
    ]
  },
  {
    label: "Resources",
    items: [
      {
        label: "Projects",
        link: "projects"
      },
      {
        label: "Your wallet",
        link: "wallet"
      }
    ]
  },
  {
    label: "Resources",
    items: [
      {
        label: "Projects",
        link: "projects"
      },
      {
        label: "Your wallet",
        link: "wallet"
      }
    ]
  },
  {
    label: "Resources",
    items: [
      {
        label: "Projects",
        link: "projects"
      },
      {
        label: "Your wallet",
        link: "wallet"
      }
    ]
  }
]
export default defineComponent({
  name: "TheFooter",
  setup () {
    return {
      footerLinks,
    }
  }
})
</script>

<style scoped>

</style>
