import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import {FetchDataService} from './shared/fetch-data.service';
import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {ModalService} from './shared/modal.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'modal', component: ModalComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent,
    ModalContentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  entryComponents:[ModalContentComponent],
  providers: [FetchDataService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
