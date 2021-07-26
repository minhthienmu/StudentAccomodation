import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'list-posts', component: ListPostsComponent},

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
