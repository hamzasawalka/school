import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom imports
import { AppComponent }  from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: 'Student', component: StudentComponent },
  { path: 'Teacher', component: TeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  
  bootstrap: [ AppComponent ]
})
export class AppRoutingModule { }
