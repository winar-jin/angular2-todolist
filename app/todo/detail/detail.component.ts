import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-detail',
    templateUrl: 'app/todo/detail/detail.component.html',
    styleUrls: ['app/todo/detail/detail.component.css']
})
export class DetailComponent implements OnInit{
    selectTodo: Todo;
    constructor(
        private todoservice: TodoService,
        private router: Router,
        private route: ActivatedRoute
    ){}
    ngOnInit(){
        let todoid = +this.route.snapshot.params['id'];
        this.selectTodo = this.todoservice.getTodoById(todoid);
        if(!this.selectTodo){
            this.router.navigate(['/todo/list']);
        }
    }

    // 返回
    goback(){
        window.history.back();
    }
}
