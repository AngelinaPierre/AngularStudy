import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  
  name = new FormControl(''); // [1]

  constructor() { }

  ngOnInit(): void {
  }

  // METHODS

  // update name
  updateName(){
    this.name.setValue('Nancy');
  }

}


// [1] Use the constructor of FormControl to set its initial value, which in this case is an empty string