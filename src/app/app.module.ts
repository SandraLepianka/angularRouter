import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterService } from './services/counter.service';
import { ContactServiceService } from './contact-service.service';


import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MyCounterComponent } from './services/my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { ContactListServiceComponent } from './contact-list-service/contact-list-service.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'listService', component: ContactListServiceComponent },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'contact/:id', component: ContactComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent,
    MySecondCounterComponent,
    ContactListServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService, ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
