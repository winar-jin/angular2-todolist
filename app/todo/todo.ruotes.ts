import { Route } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const TodoRoutes: Route[] = [
    {
        path: 'todo/list',
        component: ListComponent
    },
    {
        path: 'todo/detail/:id',
        component: DetailComponent
    }
];