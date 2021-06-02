import { Component, Input, OnInit } from '@angular/core';
import { MasterFormService } from 'src/app/services/master-form.service';
import { FormItem } from '../formitem';

@Component({
  selector: 'textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements FormItem, OnInit {

  private innerValue!: string

  constructor(private formService: MasterFormService) {
  }
  public get controlValue(): string {
    return this.innerValue;
  }

  public set controlValue(val: string) {
    this.innerValue = val
  }

  @Input()
  label!: string;
  @Input()
  name!: string;

  ngOnInit(): void {
    this.formService.registerFormControl(this);
  }

}
