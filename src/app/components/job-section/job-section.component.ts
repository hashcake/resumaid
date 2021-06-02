import { AfterViewInit, Component, ComponentFactoryResolver, ContentChild, Directive, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { JobHookDirective } from 'src/app/directives/job-hook.directive';
import { JobEntryComponent } from '../job-entry/job-entry.component';

@Component({
  selector: 'job-section',
  templateUrl: './job-section.component.html',
  styleUrls: ['./job-section.component.scss']
})
export class JobSectionComponent implements OnInit, AfterViewInit {
  
  @ViewChild(JobHookDirective, {static: true}) public entryPoint!: JobHookDirective; 

  constructor(
    private factoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  addJob() {
    const componentFactory = this.factoryResolver.resolveComponentFactory(JobEntryComponent);
    const viewContainerRef = this.entryPoint.viewContainerRef;
    // viewContainerRef?.clear();
    const componentRef = viewContainerRef.createComponent<JobEntryComponent>(componentFactory);
  }

}
