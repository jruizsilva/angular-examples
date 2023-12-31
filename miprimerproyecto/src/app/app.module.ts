import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { AtributoComponent } from './atributo/atributo.component'
import { EstructuralComponent } from './estructural/estructural.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PipesComponent } from './pipes/pipes.component'
import { EstadosPipe } from './pipes/estados.pipe'
import { CompraModule } from './compra/compra.module'
import { AppRoutingModule } from './app-routing.module'
import { VentaModule } from './venta/venta.module'
import { FormulariosComponent } from './formularios/formularios.component'
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http'
import { PostsComponent } from './posts/posts.component'
import { InterceptorService } from './services/interceptors.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtributoComponent,
    EstructuralComponent,
    PipesComponent,
    EstadosPipe,
    FormulariosComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CompraModule,
    VentaModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
