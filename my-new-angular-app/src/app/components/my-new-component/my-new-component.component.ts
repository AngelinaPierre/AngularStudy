import { Component, OnInit } from '@angular/core';

@Component({ // decorator
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss']
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//Components are the most basic building block of an UI and Angular applications. A component controls one or more sections on the screen (what we call views). For example in this example we have components like AppComponent (the bootstrapped component), CategoriesComponent, CategoryQuestionsComponent, QuestionAnswersComponent etc.

// A component is self contained and represents a reusable piece of UI that is usually constituted by three important things:
  // A piece of html code that is known as the view
  // A class that encapsulates all available data and interactions to that view through an API of properties and methods architectured by Angular. Here's where we define the application logic (what it does to support the view)
  // And the aforementioned html element also known as selector.

// Using the Angular @Component decorator we provide additional metadata that determines how the component should be processed, instantiated and used at runtime. For example we set the html template related to the view, then, we set the html selector that we are going to use for that component, we set stylesheets for that component.

// The Component passes data to the view using a process called Data Binding.
  // This is done by Binding the DOM Elements to component properties.
  // Binding can be used to display property values to the user, change element styles, respond to an user event, etc.

// A component must belong to an NgModule in order for it to be usable by another component or application. To specify that a component is a member of an NgModule, you should list it in the declarations property of that NgModule.
