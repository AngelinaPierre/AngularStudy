import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';


@NgModule({ // [1] decorator
  declarations: [
    AppComponent,
    MyNewComponentComponent,
  ],
  exports:[],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[],
})
export class AppModule { } // class name AppModule


// Modules help organize an application into cohesive functionality blocks by wrapping components, pipes, directives, and services. They are just all about developer ergonomics.

// Angular applications are modular. Every Angular application has at least one module— the root module, conventionally named AppModule. The root module can be the only module in a small application, but most apps have many more modules. As the developer, it's up to you to decide how to use the modules. Typically, you map major functionality or a feature to a module. Let's say you have four major areas in your system. Each one will have its own module in addition to the root module, for a total of five modules.

//[1] Any angular module is a class with the @NgModule decorator.
  // Decorators are functions that modify JavaScript classes.
  // They are basically used for attaching metadata to classes so that it knows the configuration of those classes and how they should work.
  // The @NgModule decorator properties that describe the module are:

  // declarations: The classes that belong to this module and are related to views. There are three classes in Angular that can contain views: components, directives and pipes.
  // exports : The classes that should be accessible to other modules components.
  // imports:  Modules whose classes are needed by the components of this module.
  // providers: Services present in one of the modules which are going to be used in the other modules or components. Once a service is included in the providers, it becomes accessible in all parts of that application.
  // bootstrap: The root component which is the main view of the application. Only the root
  // entryComponents: An entry component is any component that Angular loads imperatively, (which means you're not referencing it in the template), by type.
