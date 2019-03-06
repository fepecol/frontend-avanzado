import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fake-backend.service';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    InMemoryWebApiModule.forRoot(FakeBackendService),
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  declarations: [AppComponent],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
