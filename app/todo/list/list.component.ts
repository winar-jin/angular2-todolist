import { Component } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/list/list.component.html',
    styleUrls: ['app/todo/list/list.component.css']
})
export class ListComponent{
    newTodo: Todo = new Todo();
    constructor(
        private todocervice: TodoService
    ){}

    // 添加一个任务
    addTodo(){
        if(!this.newTodo.title.trim()){
            return ;
        }
        this.todocervice.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
    // 获取所有的任务
    get todos(): Todo[]{
        return this.todocervice.getAllTodos();
    }
    // 定义一个属性todos，并定义了他的get方法
}