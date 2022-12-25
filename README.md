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