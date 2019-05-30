import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blocks: [
      {
        blockID: 1,
        bName: "Желтый блок",
        bText:
          "Любая компания-производитель связывает с каждой своей новой моделью определенные надежды. Зачастую в связи с этим звучат громкие и красивые заявления - прорыв, революция, законодатель моды на ближайшее десятилетие... Но время тут - единственный по-настоящему объективный эксперт.",
        settings: [
          {
            ID: 34,
            Name: "Ширина",
            stringType: "int",
            filedType: "input",
            fieldValue: "60",
            fieldSize: 4
          },
          {
            ID: 35,
            Name: "Высота",
            stringType: "int",
            filedType: "input",
            fieldValue: "500",
            fieldSize: 4
          },
          {
            ID: 40,
            Name: "Цвет",
            stringType: "Str",
            filedType: "input",
            fieldValue: "#f4f5bf",
            fieldSize: 4
          }
        ]
      },
      {
        blockID: 2,
        bName: "Розовый блок",
        bText:
          "Vivamus sit amet purus blandit nunc aliquam tempor id sed mauris. Sed accumsan ornare eros, in elementum neque. Nullam vitae nisl eget massa consectetur mollis. Praesent laoreet tempus dui nec hendrerit. Nullam condimentum quam in condimentum mattis. Integer bibendum molestie ipsum sed ullamcorper. Aliquam ac dolor faucibus, gravida lectus ac, tempor turpis.",
        settings: [
          {
            ID: 36,
            Name: "Скрытое",
            filedType: "select",
            fieldValue: "0",
            fieldOptions: {
              "0": "Нет",
              "1": "Да"
            },
            fieldSize: 4
          },
          {
            ID: 40,
            Name: "Цвет",
            stringType: "Str",
            filedType: "input",
            fieldValue: "#f1c8ea",
            fieldSize: 4
          }
        ]
      }
    ],
    editedIndex: "closed"
  },
  mutations: {
    setEditedIndex(state, payload) {
      state.editedIndex = payload;
    },
    setEditBlock(state, payload) {
      state.blocks = [...state.blocks];
      state.blocks[state.editedIndex] = payload;
    }
  },
  actions: {
    async sendEditBlock(store, payload) {
      const url = "https://jsonplaceholder.typicode.com/posts";

      store.commit("setEditBlock", payload);

      try {
        const result = await axios.post(url, payload);
        //console.log(result);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  strict: process.env.NODE_ENV !== "production"
});
