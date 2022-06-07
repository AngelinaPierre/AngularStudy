import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormArray } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  // properties using formBuiler and formArray (aliases form array)
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city:[''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ]),
  });

  // properties -> using formBuilder service (group() method)
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''],
  //   }),
  // });


  // properties -> using FormGroup and control ( creating the instances manually. )
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  // METHODS

  onSubmit(){
    // TODO: Use EventEmitter with a form value
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      fistName: 'Nancy',
      address: {
        street: '123 Drew Street',
      }
    });
  }

  // Getter syntax to create an aliases class property to retrieve the alias's form array control from the parent form group.
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  // Method to dynamically insert an alias control into the alias's form array.
  // The FormArray.push() method inserts the control as a new item in the array.
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


}
