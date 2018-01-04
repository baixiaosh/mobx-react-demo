import { request } from 'utils'

export async function login (params) {
  return request({
    url: '/api/login',
    method: 'post',
    data: params,
  })
}