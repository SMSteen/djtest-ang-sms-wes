import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonService } from './pokemon.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TASKS } from './tasks-data';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'csrftoken',
    //   headerName: 'X-CSRFToken'
    // }),
    FormsModule
  ],
  providers: [PokemonService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
