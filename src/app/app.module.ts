import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { SharedModule } from './shared/shared.module';
import { MaterialLibModule } from './material-lib/material-lib.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { HttpErrorHandler } from './services/http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialLibModule,
    HttpClientModule
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [
    MessageService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
