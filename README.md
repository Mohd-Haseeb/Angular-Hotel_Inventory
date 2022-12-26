- In @Component decorator for selector, the prefix is decided or changed from the Angular.json file -> Ex : app-root

To create a component:
> ng generate(g) component(c) component_namee

- Components are building block of Angular Application
- Each component contains 4 files (.ts, .spec.ts, .html, .css)

## Template Syntax


## Binding Syntax
- 3 ways to bind the data
    1. Interpolation => {{}}
    2. Property Bindiing => [valid_html_property] : box-syntax
    3. Event Binding => (event_name)="function_name()" : banana-syntax
 
## Directives

- Directives are used to change the behaviour and appearance of DOM
- Directives can implement all Lifecycle hooks
- Directives cannot have Template 

- ### Types of Directives
    1. Structural Directive 
        - These are costly as they change DOM and can cause performance issues
        - They can modify the DOM
        - starts with *  (generally)
    2. Attribute Directive
        - They can modify the DOM but not add/remove elements from DOM like Structural Directive
- ### Built in  Directives
    - *ngIf
    - *ngFor
    - *ngSwitch
    - ngClass
    - ngStyle


## Pipes

- Pipes are used for Data Transformation
- They don't actually modify the data
- Few built in pipes are
    - DatePipe
    - UppercasePipe
    - LowercasePipe
    - CurrencyPipe
    - DecimalPipe
    - PercentPipe
    - JsonPipe
    - SlicePipe
    - AsyncPipe


## LifeCycle Hooks

- Component instance has lifecycle hooks which can help you to hook into different events on Components
- Lifecycle ends when __Component__ is __destroyed__
- The Lifecycle hooks are:
    - ngOnChanges
    - ngOnInit
    - ngDoCheck
    - ngAfterContentInit
    - ngAfterContentChecked
    - ngAfterViewInit
    - ngAfterViewChecked
    - ngOnDestroy

- Even before __ngOnInit__ hook is executed, component needs to be initialised by the __constructor__

- Constructor should not have any blocking code. It should be part of __ngOnInit__


## Component Communication

- Situation where two or more Components needs to communicate with each other is known as __Component Communication__
- There are many ways to implement this communication
    1. Using __@Input__ and __@Output__
    2. Using __@ViewChild__ and __@ContentChild__
    3. Using __Services__

### __@Input :__

- If we write @Input -> Then that particular variable will become property of the Component(HTML File ex: app-something)

- In @Input, Component which send data is called __Parent Or Smart Component__ and the compoent where the data is rendered is called __Child or Dumb Component__

- Suppose, now the Child component needs to perform some action based on certain data received from Parent. It cannot do it directly on its own. So it has to send data back to the Parent to perform the action. How do we do that? _@Output_

### __@Output :__

- 
