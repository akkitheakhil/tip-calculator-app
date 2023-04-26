import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { ResultViewerComponent } from './shared/components/result-viewer/result-viewer.component';
import { InfinityPipe } from './shared/pipe/infinity.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputComponent,
    ButtonComponent,
    ResultViewerComponent,
    InfinityPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
