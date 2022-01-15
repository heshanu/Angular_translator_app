import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteConfigLoadEnd, ROUTES} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SiderbarComponent } from './blog/siderbar/siderbar.component';
import { ArticleComponent } from './blog/article/article.component';
import {Routes,RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

const routes:Routes=[
  {path:'home',component:HomeComponent},

  {path:'blog',component:BlogComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SiderbarComponent,
    ArticleComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent,HTTP_PRO]
})
export class AppModule { }
