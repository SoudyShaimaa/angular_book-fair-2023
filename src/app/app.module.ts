import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { NavComponent } from './pages/nav/nav.component';
import { NavLinksComponent } from './pages/nav-links/nav-links.component';
import { HomeComponent } from './pages/home/home.component';
import { BookListRelatedComponent } from './pages/book-list-related/book-list-related.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TicketInfoComponent } from './pages/ticket-info/ticket-info.component';
import { TicketPaymentComponent } from './pages/ticket-payment/ticket-payment.component';
import { TicketConfirmationComponent } from './pages/ticket-confirmation/ticket-confirmation.component';
import { TicketHeaderComponent } from './pages/ticket-header/ticket-header.component';
import { HeaderBannerComponent } from './pages/header-banner/header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    NavLinksComponent,
    HomeComponent,
    BookListRelatedComponent,
    FooterComponent,
    TicketInfoComponent,
    TicketPaymentComponent,
    TicketConfirmationComponent,
    TicketHeaderComponent,
    HeaderBannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
