<template>
  <div class="block" :style="blockStyles">
    <div v-if="isHidden">Ooops! Блок скрыт!</div>
    <div v-else class="block__content">
      <div
        class="block__title"
        contenteditable="true"
        ref="bName"
        @input="setText($event, 'bName')"
        v-once
        v-text="bName"
      ></div>
      <div
        class="block__text"
        contenteditable="true"
        ref="bText"
        @input="setText($event, 'bText')"
        v-once
        v-text="bText"
      ></div>
    </div>
    <button class="button button--abs" @click="$emit('openSetting', index)">
      Настройки
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
    bName() {
      return this.block.bName;
    },
    bText() {
      return this.block.bText;
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
  watch: {
    bText: function(newValue) {
      if (document.activeElement == this.$refs.bText) {
        return;
      }

      this.$refs.bText.innerHTML = newValue;
    },
    bName: function(newValue) {
      if (document.activeElement == this.$refs.bName) {
        return;
      }

      this.$refs.bName.innerHTML = newValue;
    }
  },
  methods: {
    ...mapMutations(["setBlockValue"]),
    getSettingObj(id) {
      return this.block.settings.find(item => item.ID === id);
    },
    setText(e, type) {
      this.$emit("openSetting", this.index);
      this.setBlockValue({ type, value: e.target.innerText });
    }
  }
};
</script>
