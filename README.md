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


- @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.

### __@Input :__

- If we write @Input -> Then that particular variable will become property of the Component(HTML File ex: app-something)

- In @Input, Component which send data is called __Parent Or Smart Component__ and the compoent where the data is rendered is called __Child or Dumb Component__

- The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.

- Suppose, now the Child component needs to perform some action based on certain data received from Parent. It cannot do it directly on its own. So it has to send data back to the Parent to perform the action. How do we do that? _@Output_


![](https://angular.io/generated/images/guide/inputs-outputs/input-diagram-target-source.svg)

- The target in the square brackets, [], is the property you decorate with @Input() in the child component. The binding source, the part to the right of the equal sign, is the data that the parent component passes to the nested component.

### __@Output :__

- @Output's are Events

- The @Output() decorator in a child component or directive lets data flow from the child to the parent

```typescript
    @Output() newItemEvent = new EventEmitter<string>();

    // new EventEmitter<string>() => Tells Angular to create a new event emitter and that the data it emits is of type string.

```

- In parent component, we write
```typescript
    <app-item-output (newItemEvent)="addItem($event)"></app-item-output>
    // app-item-output is Child Component
```

- The event binding, (newItemEvent)='addItem($event)', connects the event in the child, newItemEvent, to the method in the parent, addItem().

- The $event contains the data that the user types into the <input> in the child template UI

### __@Input__ and __@Output__ together for a child component:

- The target, item, which is an @Input() property in the child component class, receives its value from the parent's property, currentItem. When you click delete, the child component raises an event, deleteRequest, which is the argument for the parent's crossOffItem() method.

- The following diagram shows the different parts of the @Input() and @Output() on the <app-input-output> child component.

- ![](https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg)

- The child selector is <app-input-output> with item and deleteRequest being @Input() and @Output() properties in the child component class. The property currentItem and the method crossOffItem() are both in the parent component class.


## ngOnChanges:

- By default Angular performs ChangeDetection on each and every Component, which sometimes is unnecessary.
- So, we can change the DetectionStrategy in the Angular Application
    - __OnPush ChangeDetectionStrategy__ can be applied only if the component is not changing the data internally(Ex: Chiild Component)

***NOTE*** : Concept of Immutbility => We should always return a new instance if we are changing the data(say a list). Lets say we are diplaying data in a table in our HTML file. And we have an option to Add new data and data is looped through an Array. So, whenever we add new Data, we shouldn't push into it rather return a new object every time we modify the instance. How? For Array we can use Spread operator.

- __ngOnChanges__ life cycle hook can be applied on a component which has __@Input__ property

- Use Case : So, whenever we get a new value in the __@Input__ => We update the value in the View by using __ngOnChnages__


## ngDoCheck

- On Changes event is something executed everytime we raise any event irrespective of where the Component is implemented or available
- It will listen to any changes happened anywhere in the entire application
- ***IMPORTANT*** => We should not implement __ngOnChange__ and __ngDoCheck__ together in the same Component


## ViewChild
 - We can access Component into another Component without using @Input or @Output 

 - Using __@ViewChild__ we have create a new instance of the Component where we want to send the data

## ngAfterViewInit
- We can use this lifecycle hook, if we have to perform certain operations after the other components we use in our current templete is completelt loaded

## ngAfterViewChecked
-  A callback method that is invoked immediately after the default change detector has completed one change-check cycle for a component's view.



## ng-template

- ***NOTE*** : If we arite __#__ on any HTML tag, we call it __Template Reference__ and we can access this in ths .ts file using __@ViewChild__

```HTML
    <ng-template #user>
        <h3>This Content is displayed DYNAMICALLY by using ng-template && @ViewChild</h3>
    </ng-template>
```

```typescript
    @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef;
```

- Here we are saying, give me reference to the __user__ tag and this __ViewContainerRef__ will help us to dynamically load a component
