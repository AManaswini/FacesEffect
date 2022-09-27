import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { RedirectcomponentComponent } from './redirectcomponent/redirectcomponent.component';
import { RedirectPage1Component } from './redirect-page1/redirect-page1.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import {MatSliderModule} from '@angular/material/slider';
import { SliderComponent } from './slider/slider.component';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { Foote2Component } from './foote2/foote2.component';
import { SignupTestComponent } from './signup-test/signup-test.component';  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    SignUpComponent,
    FooterComponent,
    RedirectcomponentComponent,
    RedirectPage1Component,
    SliderComponent,
    Foote2Component,
    SignupTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSliderModule,
    MatSliderModule,
    NgxSliderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
