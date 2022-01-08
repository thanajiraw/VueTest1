<template>
  <div id="navbar">
    <v-app-bar color="grey darken-3" dense dark>
      <v-img
        class="mr-6"
        src="https://sentenance.com/wp-content/uploads/2020/09/sentenance_logo.png"
        max-height="80"
        max-width="150"
        contain
      ></v-img>
      <div class="mt-6 mr-4">
        <v-text-field
          solo
          label="Search Here"
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-map</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-message-reply</v-icon>
      </v-btn>
      Hi, admin

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar color="primary" size="32"></v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
