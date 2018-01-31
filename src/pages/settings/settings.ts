import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {
  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'notificationsAll', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}