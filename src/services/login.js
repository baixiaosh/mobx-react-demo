import { request } from 'utils'

export async function login (params) {
  let data = await request({
    url: '/api/base/login',
    method: 'post',
    data: params,
  })
  return data
}