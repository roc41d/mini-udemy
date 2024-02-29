import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((comp) => comp.HomeComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/feature/course-list/course-list.component').then(
        (comp) => comp.CourseListComponent
      ),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./courses/feature/course-detail/course-detail.component').then(
        (comp) => comp.CourseDetailComponent
      ),
  }
];
