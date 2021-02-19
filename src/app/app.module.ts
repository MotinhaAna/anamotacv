import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SectionsComponent } from './sections/sections.component';
import { ContactComponent } from './contact/contact.component';
import { LanguagesComponent } from './languages/languages.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { SelfTaughtComponent } from './self-taught/self-taught.component';
import { HobbiesComponent } from './hobbies/hobbies.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    NavigatorComponent,
    SectionsComponent,
    ContactComponent,
    LanguagesComponent,
    StrengthsComponent,
    SelfTaughtComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
