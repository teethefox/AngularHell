import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { OneComponent } from './power/one/one.component';
import { TwoComponent } from './power/two/two.component';
import { ThreeComponent } from './power/three/three.component';
import { FourComponent } from './power/four/four.component';
import { FiveComponent } from './power/five/five.component';
import { SixComponent } from './power/six/six.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
