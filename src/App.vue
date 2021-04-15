<template>
  <v-app>
    <v-app-bar
      app
      light
      absolute
      elevate-on-scroll
      scroll-target="#scrolling"
    >
      <div class="d-flex align-center">
        <v-img class="mr-3" src="@/assets/logo.png" height="30px" width="40px"> 
            </v-img>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>
     <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
          Services
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index" router
          :to="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     <v-btn
        href="/contact"
        text
      >
        <span class="mr-2">Contact</span>
      </v-btn>
      <v-btn
        href="/faq"
        text
      >
        <span class="mr-2">FAQs</span>
      </v-btn>
      
      <v-btn
        href="/signup"
        text
      >
        <span class="mr-2">Sign Up</span>
      </v-btn>

      <v-btn
        href="/login"
        color="primary"
        elevation="3"
        icon
      >
       <v-icon>mdi-login</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main
      id="scrolling"
    >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  
  name: 'App',


  data: () => ({
     items: [
        { title: 'Citizen',
          link: "/add" },
        { title: 'Non-Citizen',
        link: "/add" },
        { title: 'Business',
        link: "/add" }
      ],
  }),
};
</script>


