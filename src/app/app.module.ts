import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleComponent } from './article/article.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    NewsCategoriesComponent,
    PageNotFoundComponent,
    NewsListComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
