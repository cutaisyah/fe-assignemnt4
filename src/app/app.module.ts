import {
  AuthInterceptorService,
  ErrorInterceptor,
} from './services/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterModule } from './register/register.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PesertaComponent } from './sidebar/peserta/peserta.component';
import { PanitiaComponent } from './sidebar/panitia/panitia.component';
import { LurahComponent } from './sidebar/lurah/lurah.component';
import { AdminComponent } from './sidebar/admin/admin.component';
import { UserMenuComponent } from './sidebar/user-menu/user-menu.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    PesertaComponent,
    PanitiaComponent,
    LurahComponent,
    AdminComponent,
    UserMenuComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
})
export class AppModule {}
