import { Component, Input, OnInit } from '@angular/core';
import { MasterFormService } from 'src/app/services/master-form.service';
import { FormItem } from '../formitem';

@Component({
  selector: 'inputtextarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements FormItem, OnInit {

  constructor(private formService: MasterFormService) { }

  @Input() label!: string;
  @Input() name!: string;
  controlValue: any;

  ngOnInit(): void {
  }

}
