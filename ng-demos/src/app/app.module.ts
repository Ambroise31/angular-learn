import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TemplateComponent } from './template/template.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ConvertorComponent } from './convertor/convertor.component';
import { CanvasComponent } from './mood/canvas/canvas.component';
import { TablistComponent } from './mood/tablist/tablist.component';
import { MoodFaceComponent } from './mood/mood-face/mood-face.component';
import { HappyComponent } from './mood/happy/happy.component';
import { SosoComponent } from './mood/soso/soso.component';
import { AngryComponent } from './mood/angry/angry.component';
import { CryptoComponent } from './crypto/crypto/crypto.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TemplateComponent,
    ReceipeComponent,
    FormComponent,
    ConvertorComponent,
    CanvasComponent,
    TablistComponent,
    MoodFaceComponent,
    HappyComponent,
    SosoComponent,
    AngryComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
