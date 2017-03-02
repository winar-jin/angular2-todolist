import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/todo/item/item.component.html',
    styleUrls: ['app/todo/item/item.component.css']
})
export class ItemComponent{
    @Input() todo: Todo;
    constructor(
        private todoservice: TodoService,
        private router: Router
    ){}

    // 跳转到任务详情页
    gotoDetail(todo){
        this.router.navigate(['/todo/detail',todo.id]);
    }

    // 标记一个任务完成、未完成
    toggleTodoComplete(todo){
        this.todoservice.toggleTodoComplete(todo);
    }

    // 删除一个任务
    deleteTodo(todo){
        this.todoservice.deleteTodoById(todo.id);
    }
}