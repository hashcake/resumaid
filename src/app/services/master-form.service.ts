import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';
import { FormItem } from '../common/forms/formitem';

@Injectable()
export class MasterFormService {

  private form!: FormGroup

  constructor() {
    this.form = new FormGroup({});
  }

  registerFormControl(formItem: FormItem): void {
    let control: FormControl = new FormControl(formItem.controlValue);
    this.form.addControl(formItem.name, control);
    console.log(control)
  }
}
