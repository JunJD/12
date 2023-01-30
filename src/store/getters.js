export default {
  // 得到是否正在加载中
  getLoading: (state) => state.isLoading,
  // 得到未读数据
  getUnread: (state) => state.unread,
  getMessageList: (state) => state.messageList,
  getToken: (state) => state.token,
}
