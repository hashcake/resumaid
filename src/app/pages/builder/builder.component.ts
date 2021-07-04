import { Component, OnInit } from '@angular/core';
import { MasterFormService } from 'src/app/services/master-form.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(private fs: MasterFormService) { }

  ngOnInit() {
  }

  get formService() {
    return this.fs;
  }

}
