import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextfieldComponent } from './common/forms/textfield/textfield.component';
import { JobSectionComponent } from './components/job-section/job-section.component';
import { JobEntryComponent } from './components/job-entry/job-entry.component';
import { JobHookDirective } from './directives/job-hook.directive';
import { FormsModule } from '@angular/forms';
import { MasterFormService } from './services/master-form.service';
import { TextareaComponent } from './common/forms/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ResumeComponent,
    TextfieldComponent,
    JobSectionComponent,
    JobEntryComponent,
    JobHookDirective,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MasterFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
