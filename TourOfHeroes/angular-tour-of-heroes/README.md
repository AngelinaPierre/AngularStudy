# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<br>
<hr>

===================== [ANNOTATIONS] =====================



## [1] @Component
<br>

- Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

<br>

### Selector
- The component's CSS element selector.
### templateUrl
- The location of the component's template file.
### styleUrl
      
- The location of the component's private CSS styles.



<br>
<hr>
  
## [2] Css element selector

- The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.

<br>
<hr>

## [3] Lifecycle Hook

- The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
- Perform complex initializations outside of the constructor
  - Components should be cheap and safe to construct. 
  - You should not, for example, fetch data in a component constructor. 
  - You shouldn't worry that a new component will try to contact a remote server when created under test or before you decide to display it.
  - An ngOnInit() is a good place for a component to fetch its initial data.
  -  For an example, see the Tour of Heroes tutorial.
- Set up the component after Angular sets the input properties
  - Constructors should do no more than set the initial local variables to simple values.
  - Keep in mind that a directive's data-bound input properties are not set until after construction. 
  - If you need to initialize the directive based on those properties, set them when ngOnInit() runs.
  - The ngOnChanges() method is your first opportunity to access those properties. Angular calls ngOnChanges() before ngOnInit(), but also many times after that. It only calls ngOnInit() once.

<br>
<hr>

## [4] UppercasePipe
- Transforms text to all upper case.

<br>
<hr>

## [5] Pipes
- Activates with the word uppercase in the interpolation binding, right after the pipe (|) character.
- Use pipes to transform strings, currency amounts, dates, and other data for display. 
- Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. 
- Pipes are useful because you can use them throughout your application, while only declaring each pipe once. 
- For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.

<br>
<hr>

## [6] [(ngModel)]
- Creates a FormControl instance from a domain model and binds it to a form control element.
- s Angular's two-way data binding syntax.

<br>
<hr>

## [7] FormsModule
- Exports the required providers and directives for template-driven forms, making them available for import by NgModules that import this module.

<br>
<hr>

## [8] @NgModule
- NgModules configure the injector and the compiler and help organize related things together.
- An NgModule is a class marked by the @NgModule decorator. 
- @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. 
- It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them. 
- @NgModule can also add service providers to the application dependency injectors.
### @NgModule.declarations
- The set of components, directives, and pipes (declarables) that belong to this module.
- declarations?: Array<Type<any> | any[]>
- The set of selectors that are available to a template include those declared here, and those that are exported from imported NgModules.
- Declarables must belong to exactly one module. 
- The compiler emits an error if you try to declare the same class in more than one module. 
- Be careful not to declare a class that is imported from another module.

<br>
<hr>

## [9] *ngFor
- A structural directive that renders a template for each item in a collection. 
- The directive is placed on an element, which becomes the parent of the cloned templates.

<br>
<hr>

## [10] Angular Event binding
- Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
- To bind to an event you use the Angular event binding syntax. 
- This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right

<br>
<hr>

## [11] @Input
- Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.

<br>
<hr>

## [12] Sharing data between child and parent directives and components
- A common pattern in Angular is sharing data between a parent component and one or more child components. Implement this pattern with the @Input() and @Output() decorators.

<br>
<hr>

## [13] Angular property binding.
- Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.

<br>
<hr>

## [14] New operator keyword
- The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

<br>
<hr>

## [15] Angular dependency injection
- Dependencies are services or objects that a class needs to perform its function. 
- Dependency injection, or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.
- Angular's DI framework provides dependencies to a class upon instantiation. 
- Use Angular DI to increase flexibility and modularity in your applications.

<br>
<hr>

## [16] @Injector

- Decorator that marks a class as available to be provided and injected as a dependency.

<br>
<hr>

## [17] Provider
- You must make the Service available to the dependency injection system before Angular can inject it into the Component by registering a provider. 
- A provider is something that can create or deliver a service; in this case, it instantiates the Service class to provide the service.
- To make sure that the Service can provide this service, register it with the injector, which is the object that is responsible for choosing and injecting the provider where the application requires it.

<br>
<hr>

## [18] ngOnInit lifecycle hook
- A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. 
- The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed.
- The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. 
- Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.
- Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

<br>
<hr>

## [19] HttpClient
- Performs HTTP requests. 
- This service is available as an injectable class, with methods to perform HTTP requests. 
- Each request method has multiple signatures, and the return type varies based on the signature that is called (mainly the values of observe and responseType).
- Note that the responseType options value is a String that identifies the single data type of the response. 
- A single overload version of the method handles each response type. 
- The value of responseType cannot be a union, as the combined signature could imply.

###  HttpClieng.get() return an observable (Communicating with backend services using HTTP)
- HttpClient.get() returns the body of the response as an untyped JSON object by default.
- Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services.
- Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.
- The HTTP client service offers the following major features.
  - The ability to request typed response objects
  - Streamlined error handling
  - Testability features
  - Request and response interception
- Constructs an observable that, when subscribed, causes the configured GET request to execute on the server. 
- See the individual overloads for details on the return type.

### HttpClientModule
- Configures the dependency injector for HttpClient with supporting services for XSRF. 
- Automatically imported by HttpClientModule.
- You can add interceptors to the chain behind HttpClient by binding them to the multiprovider for built-in DI token HTTP_INTERCEPTORS.

### HttpHeaders
- Represents the header configuration options for an HTTP request. 
- Instances are immutable. 
- Modifying methods return a cloned instance with the change. 
- The original object is never changed.

### HttpClient.put()
- The HttpClient.put() method takes three parameters:
  - The URL
  - The data to update (the modified hero in this case)
  - Options
- Constructs an observable that, when subscribed, causes the configured PUT request to execute on the server. 
- The PUT method replaces an existing resource with a new set of values. 
- See the individual overloads for details on the return type.

### HttpClient.post()
- Constructs an observable that, when subscribed, causes the configured POST request to execute on the server. 
- The server responds with the location of the replaced resource. 
- See the individual overloads for details on the return type.

### HttpClient.delete()
- Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server. 
- See the individual overloads for details on the return type.

<br>
<hr>

## [20] Observables (Using observables to pass values)
- Observables provide support for passing messages between parts of your application. 
- They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.
- The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes. 
- This pattern is similar (but not identical) to the publish/subscribe design pattern.
- Observables are declarative — that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it.
- The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.
- An observable can deliver multiple values of any type — literals, messages, or events, depending on the context. 
- The API for receiving values is the same whether the values are delivered synchronously or asynchronously. 
- Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values, and when done, unsubscribing. 
- Whether the stream was keystrokes, an HTTP response, or an interval timer, the interface for listening to values and stopping listening is the same.
- Because of these advantages, observables are used extensively within Angular, and for application development as well.

<br>
<hr>

## [21] Rxjs library
- RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. - This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface

### RxJS operators

- Passing a new search term directly to the searchHeroes() after every user keystroke would create an excessive amount of HTTP requests, taxing server resources and burning through data plans.
- Instead, the ngOnInit() method pipes the searchTerms observable through a sequence of RxJS operators that reduce the number of calls to the searchHeroes(), ultimately returning an observable of timely hero search results (each a Hero[]).

#### debounceTime(300)
-Waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. 
- You'll never make requests more frequently than 300ms.

#### distinctUntilChanged() 
- Ensures that a request is sent only if the filter text changed.

#### switchMap() 
- Calls the search service for each search term that makes it through debounce() and distinctUntilChanged(). It cancels and discards previous search observables, returning only the latest search service observable.
- The main difference between switchMap and other flattening operators is the cancelling effect. 
- On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed. 
- You can remember this by the phrase switch to a new observable.
- This works perfectly for scenarios like typeaheads where you are no longer concerned with the response of the previous request when a new input arrives. 
- This also is a safe option in situations where a long lived inner observable could cause memory leaks, for instance if you used mergeMap with an interval and forgot to properly dispose of inner subscriptions. 
- Remember, switchMap maintains only one inner subscription at a time, this can be seen clearly in the first example.
- Be careful though, you probably want to avoid switchMap in scenarios where every request needs to complete, think writes to a database. 
- switchMap could cancel a request if the source emits quickly enough. 
- In these scenarios mergeMap is the correct option.

> With the switchMap operator, every qualifying key event can trigger an HttpClient.get() method call. Even with a 300ms pause between requests, you could have multiple HTTP requests in flight and they may not return in the order sent.
> >
> switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded.

<br>

### RxJS Subject
- A Subject is both a source of observable values and an Observable itself.
- You can subscribe to a Subject as you would any Observable.
- You can also push values into that Observable by calling its next(value) method.

<br>
<hr> 

## [22] *ngIf
- A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean. 
- When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause. 
- The default template for the else clause is blank.
- A shorthand form of the directive, *ngIf="condition", is generally used, provided as an attribute of the anchor element for the inserted template. 
- Angular expands this into a more explicit version, in which the anchor element is contained in an <ng-template> element.

<br>
<hr>

## [23] RouterModule
- Adds directives and providers for in-app navigation among views defined in an application. 
- Use the Angular Router service to declaratively specify application states and manage state transitions.
- You can import this NgModule multiple times, once for each lazy-loaded bundle. However, only one Router service can be active. To ensure this, there are two ways to register routes when importing this module:
  - The forRoot() method creates an NgModule that contains all the directives, the given routes, and the Router service itself.
  - The forChild() method creates an NgModule that contains all the directives and the given routes, but does not include the Router service.

### Routes
- Represents a route configuration for the Router service. An array of Route objects, used in Router.config and for nested route configurations in Route.children.
- A typical Angular Route has two properties:
  - PATH: a string that matches the URL in the browser address bar.
  - COMPONENT: The component that the router should create when navigating to this route.

### RouterModule.forRoot()
- Creates and configures a module with all the router providers and directives. Optionally sets up an application listener to perform an initial navigation.
- The method is called forRoot() because you configure the router at the application's root level. 
- The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

### RouterOutlet
- Acts as a placeholder that Angular dynamically fills based on the current router state.
- Each outlet can have a unique name, determined by the optional name attribute. 
- The name cannot be set or changed dynamically. 
- If not set, default value is "primary".

### RouterLink
- When applied to an element in a template, makes that element a link that initiates navigation to a route. 
- Navigation opens one or more routed components in one or more <router-outlet> locations on the page.
- Given a route configuration [{ path: 'user/:name', component: UserCmp }], the following creates a static link to the route: <a routerLink="/user/bob">link to user component</a>
- You can use dynamic values to generate the link. For a dynamic link, pass an array of path segments, followed by the params for each segment. 
  - For example, ['/team', teamId, 'user', userName, {details: true}] generates a link to /team/11/user/bob;details=true.
- Multiple static segments can be merged into one term and combined with dynamic segments. 
  - For example, ['/team/11/user', userName, {details: true}]
- The input that you provide to the link is treated as a delta to the current URL. 
  - For instance, suppose the current URL is /user/(box//aux:team). 
  - The link <a [routerLink]="['/user/jim']">Jim</a> creates the URL /user/(jim//aux:team). 
  - See createUrlTree for more information.
- You can use absolute or relative paths in a link, set query parameters, control how parameters are handled, and keep a history of navigation states.

### ActivatedRoute
- Provides access to information about a route associated with a component that is loaded in an outlet. 
- Use to traverse the RouterState tree and extract information from nodes.


<br>
<hr>

## [24] CommonModule
- Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on. Re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.
  - The providers options configure the NgModule's injector to provide localization dependencies to members.
  - The exports options make the declared directives and pipes available for import by other NgModules.
- The <router-outlet> tells the router where to display routed views.

> The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule. The ng generate command you ran at the start of this tutorial added this import because of the --module=app flag. If you manually created app-routing.module.ts or used a tool other than the CLI to do so, you'll need to import AppRoutingModule into app.module.ts and add it to the imports array of the NgModule.

### Location
- A service that applications can use to interact with a browser's URL.

<br>
<hr>

## [25] Template literals (Template strings)
- Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.
- Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). 
- However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

<br>
<hr>

## [26] In memory web API
- An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.
- It intercepts Angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.
- The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. 
- When a new value is emitted, the async pipe marks the component to be checked for changes. 
- When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks. 
- When the reference of the expression changes, the async pipe automatically unsubscribes from the old Observable or Promise and subscribes to the new one.

> Notes from tutorial:
> >
> Since *ngFor can't do anything with an Observable, use the pipe (|) character followed by async. This identifies Angular's AsyncPipe and subscribes to an Observable automatically so you won't have to do so in the component class.

<br>
<hr>

## [27] AsyncPipe
- Unwraps a value from an asynchronous primitive.

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
<br>
<hr>

<br>
<hr>

<br>
<hr>
