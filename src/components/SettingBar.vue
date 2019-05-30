<template>
  <div
    class="setting-bar"
    :class="{ 'setting-bar--open': $store.state.editedIndex !== 'closed' }"
  >
    <div class="setting-bar__content">
      <div class="setting-bar__header">
        <div class="setting-bar__title">Настройки</div>
        <div class="setting-bar__btns">
          <button type="submit" class="button" @click="saveSetting">
            Сохранить
          </button>
          <button
            class="close-button"
            @click="$emit('closeSetting', 'closed')"
          ></button>
        </div>
      </div>
      <div
        class="setting-field"
        v-for="(setting, i) in editedBlock.settings"
        :key="setting.ID"
      >
        <label class="setting-label">
          {{ setting.Name }}
          <div v-if="setting.filedType === 'input'">
            <input
              :type="setting.stringType === 'int' ? 'number' : 'text'"
              class="setting-input"
              :value="setting.fieldValue"
              @input="setValue(i, $event)"
              required
            />
            <div class="setting-input-hint">
              {{ setting.ID === 34 ? "%" : setting.ID === 35 ? "px" : "" }}
            </div>
          </div>
          <div v-if="setting.filedType === 'select'">
            <select
              :value="setting.fieldValue"
              @input="setValue(i, $event)"
              class="setting-select"
            >
              <option
                v-for="option in Object.keys(setting.fieldOptions)"
                :value="option"
                :key="option"
                >{{ setting.fieldOptions[option] }}</option
              >
            </select>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "SettingBar",
  data() {
    return {
      editedInfo: {}
    };
  },
  computed: {
    ...mapState(["editedIndex"]),
    editedBlock() {
      return this.editedIndex === "closed"
        ? {}
        : this.$store.state.blocks[this.editedIndex];
    }
  },
  watch: {
    editedIndex: function(val) {
      this.editedInfo =
        val === "closed" ? {} : JSON.parse(JSON.stringify(this.editedBlock));
    }
  },
  methods: {
    ...mapActions(["sendEditBlock"]),
    saveSetting() {
      //console.log(this.editedInfo);
      this.sendEditBlock(JSON.parse(JSON.stringify(this.editedInfo)));
    },
    setValue(i, e) {
      console.log(i, e);
      this.editedInfo.settings[i].fieldValue = e.target.value;
    }
  }
};
</script>
