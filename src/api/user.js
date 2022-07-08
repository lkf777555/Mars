import request from '../utils/request'

export const login = (model) => request.post('users/login', model) // 登录接口
export const getPermissionList = () => request.get('users/getPermissionList') // 左侧侧边栏
export const UserList = (num, size) => {
  return request.get(`/users/list?state=0&pageNum=${num}&pageSize=${size}`)
} // 用户列表

// users/list?state=0&pageNum=2&pageSize=10
