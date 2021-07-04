import { Component, OnInit } from '@angular/core';
import { MasterFormService } from 'src/app/services/master-form.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  private formData: any;

  constructor(private formService: MasterFormService) { }

  ngOnInit(): void {
    this.formData = this.formService.getFormData();
  }

}
