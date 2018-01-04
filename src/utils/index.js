import config from './config'
import request from './request'
import lodash from 'lodash'

const queryURL = (name) => {
  let query = window.location.hash.substr(1).split('?')
  let r = query.length > 1 ? query[1].split('&') : []
  let from = r.filter(i => { let parmas = i.split('='); return parmas[0] === name })
  if (r != null) return decodeURIComponent(from && from.length > 0 ? from[0].split('=')[1] : '')
  return null
}

/**
 * 数组内查询
 * @param   {array}      array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(_ => _[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
const arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') => {
  let data = lodash.cloneDeep(array)
  let result = []
  let hash = {}
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item) => {
    let hashVP = hash[item[pid]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

const filterChild = (array, value, id = 'id', pid = 'pid') => {
  let temp = array.filter(i => {
    return i[id] !== value && i[pid] !== value
  })
  array.map(i => {
    if (i[pid] === value) {
      temp = filterChild(temp, i[id], id, pid)
    }
  })
  return temp
}
const getDomain = () => {
  return location.origin
}

module.exports = {
  config,
  request,
  getDomain,
  queryURL,
  queryArray,
  filterChild,
  arrayToTree,
}
