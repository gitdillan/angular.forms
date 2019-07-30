import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms'
import { TableComponent } from './table/table.component';
import { FetchtableComponent } from './fetchtable/fetchtable.component';
import { Fetchtable2Component } from './fetchtable2/fetchtable2.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import {SampleService} from './sample.service';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
const approot:Routes=[
{path:"",component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"contact",component:ContactComponent},
{path:"table", component:TableComponent},
{path:"fetchtable", component:FetchtableComponent},
{path:"fetchtable2", component:Fetchtable2Component},
{path:"localstorage", component:LocalstorageComponent},
{path:"cart", component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TableComponent,
    FetchtableComponent,
    Fetchtable2Component,
    LocalstorageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approot),
    FormsModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
