import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [ 
{path:'home',component:HomeComponent},
{path:'', pathMatch:'full', redirectTo:'home'},
{path:'blog/:blogId', component:BlogViewComponent},
{path: 'create', component: BlogCreateComponent},
{path:'edit/:blogId',component:BlogEditComponent},
{path: 'about', component: AboutComponent},
//  {path:'**',component:NotFoundComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
