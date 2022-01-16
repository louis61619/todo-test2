import { request } from './request'

export function getTodoList() {
  return request({
    url: '/todo',
    method: 'GET',
  })
}

export function addTodoItem(title, description) {
  return request({
    url: '/todo',
    method: 'POST',
    data: {
      title,
      description,
    },
  })
}

export function modifyTodoItem(id, title, description) {
  return request({
    url: '/todo/' + id,
    method: 'PUT',
    data: {
      title,
      description,
    },
  })
}

export function deleteTodoItem(id) {
  return request({
    url: '/todo/' + id,
    method: 'DELETE',
  })
}
