<template>
  <div class="edit-form">
    <h3>バインドとイベントを使った場合</h3>
    <input type="text" :value="message" @input="doUpdate">
    <h3>v-model を使った場合</h3>
    <input v-model="message2">
    <h1>{{test1}}</h1>
    <h1>{{test2}}</h1>
    <button v-on:click="clickTest1">テスト1</button>
    <button v-on:click="clickTest2">テスト2</button>
    <button v-on:click="clickTest3">テスト3</button>
    <button v-on:click="matomeru">テスト4</button>
    <h1>{{test3}}</h1>
    <h1>{{test4}}</h1>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'EditForm',
  computed: {
    test1() {
      return console.log(store.state.moduleA.count)
    },
    test2() {
      return console.log(store.state.moduleB.count)
    },
    test3() {
      return console.log(store.state.moduleA.count)
    },
    test4() {
      return console.log(store.state.moduleB.count)
    },
    message() {
      return store.getters.message
    },
    message2: {
      get() {return store.getters.message},
      set(value) { store.dispatch('doupdate', value)}
    }
  },
  methods: {
    doUpdate(event) {
      // input の値を持ってディスパッチ
      store.dispatch('doUpdate', event.target.value)
    },
    clickTest1() {
      store.commit('moduleA/update')
    },
    clickTest2() {
      store.commit('moduleB/update')
    },
    clickTest3() {
      store.dispatch('moduleC/test')
      console.log(store.getters['moduleC/test'])
    },
    matomeru() {
      store.dispatch('moduleE/load', './a.json')
      store.dispatch('moduleF/load', './b.json')
    }
  }
}
</script>
