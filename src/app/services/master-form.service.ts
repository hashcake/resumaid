import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormItem } from '../common/forms/formitem';

@Injectable()
export class MasterFormService {

  public form!: FormGroup

  constructor() {
    this.form = new FormGroup({});
  }

  registerFormControl(formItem: FormItem): void {
    let control: FormControl = new FormControl(formItem.controlValue);
    this.form.addControl(formItem.name, control);
  }

  getFormData() {
    const controls = this.form.controls;
    console.log(controls)
    return controls;
  }
}
