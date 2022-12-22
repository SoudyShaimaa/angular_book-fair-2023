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
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookstoreListingComponent } from './pages/bookstore-listing/bookstore-listing.component';
import { ForgerPasswordComponent } from './pages/forger-password/forger-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { ForgetPasswordConfirmationComponent } from './pages/forget-password-confirmation/forget-password-confirmation.component';
import { BookstoreDetailsComponent } from './pages/bookstore-details/bookstore-details.component';
import { BookListItemComponent } from './pages/book-list-item/book-list-item.component';
import { NoDateComponent } from './pages/no-date/no-date.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';
import { EventsListingComponent } from './pages/events-listing/events-listing.component';

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
    SigninComponent,
    SignupComponent,
    BookstoreListingComponent,
    ForgerPasswordComponent,
    NewPasswordComponent,
    ForgetPasswordConfirmationComponent,
    BookstoreDetailsComponent,
    BookListItemComponent,
    NoDateComponent,
    SearchResultComponent,
    VisitorsComponent,
    EventsListingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
