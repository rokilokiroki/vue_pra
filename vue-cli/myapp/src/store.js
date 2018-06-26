import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    update(state) {
      state.count += 100
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    update(state) {
      state.count += 200
    }
  }
}

const moduleC = {
  namespaced: true,
  getters: {
    test(state,getters,rootState,rootGetters) {
      getters.item
      rootGetters.user
      return [getters.item, rootGetters.user]
    },
    item() {
      return 'getter: moduleC/item'
    }
  },
  actions: {
    test({dispatch, commit, getters, rootGetters}) {
      dispatch('update')
      dispatch('update', null, {root: true})
      commit('update', null, {root: true})
      commit('moduleD/update', null, {root: true})
    },
    update() {console.log('action: moduleC/update')},
  }
}
const moduleD = {
  namespaced: true,
  mutations: {
    update() {console.log('mutation: moduleD/update')}
  }
}

const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    }
  },
  mutations: {
    set(state, payload) {
      state.entries = payload
    }
  },
  actions : {
    load({commit}, file) {
      axios.get(file).then(response => {
        commit('set', response.data)
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    moduleC,
    moduleD,
    moduleE :myModule,
    moduleF :myModule
  },
  state: {
    message: '初期メッセージ'
  },
  getters: {
    // messageを使用するゲッター
    message(state) {
      return state.message
    },
    user() {
      return 'getter: user'
    }
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
      state.message = payload.message
    },
    update() {
      console.log('mutation: update')
    },
  },
  actions: { // メッセージの更新処理
    doUpdate({commit}, message) {
      commit('setMessage', {message})
    },
    update() {
      console.log('action: update')
    }
  },
})
export default store
