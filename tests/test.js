var TodoList = require('../src/javascripts/todo-list.js')

describe("DOM Tests", function () {
	let todoList = new TodoList(invisibles);
	var list = todoList.addItem('list-1');

//document.getElementById('main-ul').appendChild(list);

var myEl = document.getElementsByClassName('todo-list');
    it("is in the DOM", function () {
        expect(myEl).to.not.equal(null);
    });
});