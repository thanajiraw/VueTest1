<template>
  <div id="sidebar">
    <v-card class="mx-auto" width="300">
      <!-- <v-navigation-drawer class="white"> -->
        <v-list>
          <v-list-item v-for="([icon, text], i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- list2 sub -->
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Device Management</v-list-item-title>
          </template>

          <v-list-item v-for="([title, icon], i) in devices" :key="i" link>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title le v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- list3 sub -->
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Manage</v-list-item-title>
          </template>

          <v-list-item v-for="([title, icon], i) in manages" :key="i" link>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title le v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- list4 sub -->
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Setting</v-list-item-title>
          </template>

          <v-list-item v-for="([title, icon], i) in sets" :key="i" link>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title le v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- logout -->
        <template v-slot:append>
          <div class="pa-2">
            <v-btn class="red--text" block> Logout </v-btn>
          </div>
        </template>
      <!-- </v-navigation-drawer> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    selectedItem: 1,
    items: [
      ["mdi-cloud-outline", "Overview"],
      ["mdi-file-document", "Report"],
      ["mdi-map", "Map"],
      ["mdi-compass", "Location"],
    ],
    devices: [
      ["Sensor", "mdi-signal"],
      ["Gateway", "mdi-router-wireless"],
      ["Camera", "mdi-camera"],
    ],
    manages: [
      ["Work Management", "mdi-briefcase"],
      ["Work Status", "mdi-text-box"],
    ],
    sets: [
      ["Alert", "mdi-alert-decagram"],
      ["Network", "mdi-wifi"],
      ["Location Setting", "mdi-compass"],
      ["User", "mdi-account"],
      ["Permission Setting", "mdi-account-check"],
      ["Form", "mdi-file"],
    ],
  }),
};
</script>

<style></style>
