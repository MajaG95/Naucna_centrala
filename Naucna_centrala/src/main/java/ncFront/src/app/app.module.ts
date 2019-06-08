import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';

import { RegistracijaService } from './services/registracija.service';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

if (environment.production) {
  enableProdMode();
}

const Routes = [
  {
    path: "home",
    component: RegistracijaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistracijaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
