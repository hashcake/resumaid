import { Component, Input, OnInit } from '@angular/core';
import { MasterFormService } from 'src/app/services/master-form.service';
import { FormItem } from '../formitem';

@Component({
  selector: 'textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements FormItem, OnInit {

  constructor(private formService: MasterFormService) {
  }
  public get controlValue(): any {
    return 'test';
  }

  @Input()
  label!: string;
  @Input()
  name!: string;

  ngOnInit(): void {
    this.formService.registerFormControl(this)
  }

}
