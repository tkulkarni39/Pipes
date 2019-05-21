import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    AsyncPipeComponent,
    CustomPipeComponent,
    CustomPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
