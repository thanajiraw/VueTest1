<template>
  <div>
    <!-- <h1>App</h1> -->
    <v-app>
      <Navbar />
      <v-row>
        <v-col cols="2">
          <Sidebar />
        </v-col>

        <v-col fluid>
          <div>
            <Content />
          </div>
        </v-col>
      </v-row>
    
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";
// import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Content,
    // Table
  },
};
</script>

<style>
body {
  font-weight: 300;
}
</style>
