import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../model/todo';
import { TodoInterface } from '../interface/todo-interface'
import { TODO } from '../mocks/mocks-todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todo: TodoInterface[] = TODO;
    newTodo: TodoInterface = new Todo();

    constructor() { }

    addTodo() {
        const lastIndex: number = this.todo.length - 1;
        const last: TodoInterface = this.todo[lastIndex];
        this.newTodo.id = last.id + 1;
        this.todo.push(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleCompleteTodo(todo) {
        todo.isCompleted = !todo.isCompleted;
    }

    toggleDeleteTodo(todo) {
        todo.isDeleted = !todo.isDeleted;
    }

    renderIsCompletedText(todo) {
        return todo.isCompleted ? 'Uncomplete' : 'Complete';
    }

    ngOnInit() {
    }

}