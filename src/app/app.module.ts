import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './master/service/Interceptor.service';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './master/usuario/usuario.component';

@NgModule({
  declarations: [AppComponent, UsuarioComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
