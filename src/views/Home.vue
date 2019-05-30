<template>
  <div class="home">
    <div class="blocks">
      <block
        v-for="(block, i) in $store.state.blocks"
        :key="block.blockID"
        :index="i"
        @openSetting="toggleSettingBar"
      />
    </div>
    <setting-bar @closeSetting="toggleSettingBar" />
    <loading v-if="$store.state.loading" />
  </div>
</template>

<script>
// @ is an alias to /src
import Block from "@/components/Block.vue";
import SettingBar from "@/components/SettingBar.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "home",
  components: {
    Block,
    SettingBar,
    Loading
  },
  methods: {
    toggleSettingBar(payload) {
      //console.log(payload);
      this.$store.commit("setEditedIndex", payload);
    }
  }
};
</script>
