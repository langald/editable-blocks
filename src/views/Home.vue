<template>
  <div class="home">
    <div class="blocks">
      <block
        v-for="(block, i) in $store.state.blocks"
        :key="block.blockID"
        :index="i"
        @openSetting="toggleSettingBar"
        @onBlockClick="closeSettingBar"
      />
    </div>
    <setting-bar @closeSetting="toggleSettingBar" />
  </div>
</template>

<script>
// @ is an alias to /src
import Block from "@/components/Block.vue";
import SettingBar from "@/components/SettingBar.vue";

export default {
  name: "home",
  components: {
    Block,
    SettingBar
  },
  methods: {
    toggleSettingBar(payload) {
      console.log(payload);
      this.$store.commit("setEditedIndex", payload);
    },
    closeSettingBar(payload) {
      if (this.$store.state.editedIndex !== "closed") {
        this.$store.commit("setEditedIndex", "closed");
      }
      //console.log(e.target.nodeName === "BUTTON");
    }
  }
};
</script>
