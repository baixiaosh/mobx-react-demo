import { request } from 'utils'

export function login (params) {
  return request({
    url: '/api/base/login',
    method: 'post',
    data: params,
  })
}