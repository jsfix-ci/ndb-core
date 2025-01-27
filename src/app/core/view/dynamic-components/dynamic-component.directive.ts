import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from "@angular/core";
import { DynamicComponentConfig } from "./dynamic-component-config.interface";
import { OnInitDynamicComponent } from "./on-init-dynamic-component.interface";
import { ViewRegistry } from "./dynamic-component.decorator";

/**
 * Directive to mark a template into which a component that is dynamically injected from config should be loaded
 *
 * Pass the DynamicComponentConfig into the directive to define the component to be injected.
 *
 * A component that is dynamically injected must implement the {@link OnInitDynamicComponent} interface
 * to allow initialization of input properties from a dynamic config object.
 */
@Directive({
  selector: "[appDynamicComponent]",
})
export class DynamicComponentDirective implements OnChanges {
  @Input() appDynamicComponent: DynamicComponentConfig;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private registry: ViewRegistry
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadDynamicComponent();
  }

  private loadDynamicComponent() {
    if (!this.appDynamicComponent) {
      return;
    }

    const component = this.registry.get(this.appDynamicComponent.component);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<OnInitDynamicComponent>(
      component
    );

    this.viewContainerRef.clear();

    const componentRef = this.viewContainerRef.createComponent<OnInitDynamicComponent>(
      componentFactory
    );
    componentRef.instance.onInitFromDynamicConfig(
      this.appDynamicComponent.config
    );
  }
}
