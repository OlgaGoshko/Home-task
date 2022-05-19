
/**
 * Є список справ - todos, який потрібно відобразити
 * в документі (в html). Кожна справа (todo) - це елемент "li"
 * В середину елементу "ul", який вже існує в html потрібно по черзі вставити 
 * елемент "li" з відповідним контентом (з списку todos)
 */

const todos = [
   'Купити хліб',
   'Купити масло',
   'Купити молоко',
]

const todoList = document.querySelector('ul')
todoList.insertAdjacentHTML('afterbegin', '<li>Купити молоко</li>')
todoList.insertAdjacentHTML('afterbegin', '<li>Купити масло</li>')
todoList.insertAdjacentHTML('afterbegin', '<li>Купити хліб</li>')

console.log(todos)