import {
  // SET_LOADING,
  // SET_UNREAD
} from './mutation_types.js'
export default {
  // 改变是否正在加载的状态
  setLoading ({commit}, loadstate) {
    commit('SET_LOADING', loadstate)
  },
  setUnread ({commit}, loadstate) {
    commit('SET_UNREAD', loadstate)
  },
  setMessageList ({commit}, loadstate) {
    commit('SET_MESSAGELIST', loadstate)
  },
  setToken ({commit}, loadstate) {
    commit('SET_TOKEN', loadstate)
  }
}
