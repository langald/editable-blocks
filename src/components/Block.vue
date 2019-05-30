<template>
  <div class="block" :style="blockStyles">
    <div v-if="isHidden">Ooops! Блок скрыт!</div>
    <div v-else class="block__content" @click="$emit('onBlockClick', index)">
      <div class="block__title" contenteditable>{{ block.bName }}</div>
      <div class="block__text" contenteditable>
        {{ block.bText }}
      </div>
    </div>
    <button class="button button--abs" @click="$emit('openSetting', index)">
      Настройки
    </button>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    block() {
      return this.$store.state.blocks[this.index];
    },
    bgColor() {
      const setting = this.getSettingObj(40);
      return setting ? setting.fieldValue : "#ffffff";
    },
    width() {
      const setting = this.getSettingObj(34);
      // const width = setting ? setting.fieldValue : 0;
      // return width > document.documentElement.clientWidth || width === 0
      //   ? "100%"
      //   : width + "px";
      const width = setting ? setting.fieldValue : 0;
      return width > 100 || width === 0 ? "100%" : width + "%";
    },
    height() {
      const setting = this.getSettingObj(35);
      return setting ? setting.fieldValue + "px" : "auto";
    },
    blockStyles() {
      return {
        background: this.bgColor,
        width: this.width,
        height: this.height
      };
    },
    isHidden() {
      const setting = this.getSettingObj(36);
      return setting ? setting.fieldValue === "1" : false;
    }
  },
  methods: {
    getSettingObj(id) {
      return this.block.settings.find(item => item.ID === id);
    }
  }
};
</script>
