import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsCategoriesComponent } from "./news-categories/news-categories.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: "categories", component: NewsCategoriesComponent },
  { path: "categories/:id", component: NewsListComponent },
  { path: "news/:id", component: ArticleComponent},
  { path: "", redirectTo: "/categories", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
