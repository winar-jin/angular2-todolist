import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from './todo.service';

import { ListComponent } from './list/list.component';
import { DetailComponent }  from './detail/detail.component';
import { ItemComponent } from './item/item.component';

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [ListComponent,DetailComponent,ItemComponent],
    providers: [TodoService]
})
export class TodoModule{}