import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService{
    // 生成一个自增的ID
    lastId: number = 0;
    todos: Todo[] = []; // 保存任务列表
    constructor(){}

    // 添加一个Todo
    addTodo(todo: Todo): TodoService{
        // 默认情况下todo是没有Id的，先给此todo添加ID
        if(!todo.id){
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        // 方法定义了返回值类型为TodoService，所以这里返回this，也就是TodoService，方便之后继续链式调用TodoService方法
        return this;
    }

    // 删除指定的任务
    deleteTodoById(id: number): TodoService{
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    // 更新一个任务
    updateTodoById(id: number,value: Object = {}): Todo{
        let todo = this.getTodoById(id);
        if(!todo){
            return null;
        }
        Object.assign(todo,value);
        // 将更新的values对象的属性值赋给todo对象
        return todo;
    }

    // 获取所有的任务列表
    getAllTodos():Todo[]{
        return this.todos;
    }
    // 根据ID获取某任务
    getTodoById(id: number): Todo{
        return this.todos.filter(todo => todo.id === id).pop();
    }

    // 标记一个任务是否完成、未完成
    toggleTodoComplete(todo: Todo): Todo{
        let newTodo = this.updateTodoById(todo.id,{
            complete: !todo.complete
        });
        return newTodo;
    }
}