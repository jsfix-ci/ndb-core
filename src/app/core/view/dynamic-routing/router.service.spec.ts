import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Route, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ChildrenListComponent } from "../../../child-dev-project/children/children-list/children-list.component";
import { AdminComponent } from "../../admin/admin/admin.component";
import { ConfigService } from "../../config/config.service";
import { LoggingService } from "../../logging/logging.service";

import { RouterService } from "./router.service";
import { EntityDetailsComponent } from "../../entity-components/entity-details/entity-details.component";
import { ViewConfig } from "./view-config.interface";
import { UserRoleGuard } from "../../permissions/permission-guard/user-role.guard";
import { RouteRegistry, routesRegistry } from "../../../app.routing";
import { ApplicationLoadingComponent } from "./empty/application-loading.component";
import { NotFoundComponent } from "./not-found/not-found.component";

class TestComponent extends Component {}

describe("RouterService", () => {
  let service: RouterService;

  let mockConfigService: jasmine.SpyObj<ConfigService>;
  let mockLoggingService: jasmine.SpyObj<LoggingService>;

  beforeEach(() => {
    mockConfigService = jasmine.createSpyObj(["getAllConfigs"]);
    mockConfigService.getAllConfigs.and.returnValue([]);
    mockLoggingService = jasmine.createSpyObj(["warn"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: ConfigService, useValue: mockConfigService },
        { provide: LoggingService, useValue: mockLoggingService },
        { provide: RouteRegistry, useValue: routesRegistry },
      ],
    });
    service = TestBed.inject(RouterService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should keep additional routes when reloading router config", () => {
    const testRoutes = [{ path: "user", component: TestComponent }];
    const router = TestBed.inject<Router>(Router);
    spyOn(router, "resetConfig");

    service.reloadRouting([], testRoutes);

    expect(router.resetConfig).toHaveBeenCalledWith(testRoutes);
  });

  it("should generate and add routes from config for router config", () => {
    const testViewConfig = { foo: 1 };
    const testViewConfigs: ViewConfig[] = [
      { _id: "view:child", component: "ChildrenList" },
      {
        _id: "view:child/:id",
        component: "EntityDetails",
        config: testViewConfig,
      },
      {
        _id: "view:admin",
        component: "Admin",
        permittedUserRoles: ["user_app"],
      },
    ];
    const expectedRoutes = [
      { path: "child", component: ChildrenListComponent, data: {} },
      {
        path: "child/:id",
        component: EntityDetailsComponent,
        data: { config: testViewConfig },
      },
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [UserRoleGuard],
        data: { permittedUserRoles: ["user_app"] },
      },
    ];

    const router = TestBed.inject<Router>(Router);
    spyOn(router, "resetConfig");

    service.reloadRouting(testViewConfigs);

    expect(router.resetConfig).toHaveBeenCalledWith(expectedRoutes);
  });

  it("should extend a view config route of lazy loaded routes (hard coded)", () => {
    const existingRoutes: Route[] = [
      { path: "other", component: TestComponent },
      { path: "child", component: ChildrenListComponent },
    ];
    const testViewConfigs: ViewConfig[] = [
      {
        _id: "view:other",
        permittedUserRoles: ["admin_app"],
        lazyLoaded: true,
      },
    ];
    const expectedRoutes: Route[] = [
      {
        path: "other",
        component: TestComponent,
        canActivate: [UserRoleGuard],
        data: { permittedUserRoles: ["admin_app"] },
      },
      { path: "child", component: ChildrenListComponent },
    ];

    const router = TestBed.inject(Router);
    spyOn(router, "resetConfig");

    service.reloadRouting(testViewConfigs, existingRoutes);

    expect(router.resetConfig).toHaveBeenCalledWith(expectedRoutes);
  });

  it("should update existing routes when config changes", () => {
    const routeConfigs1: ViewConfig[] = [
      { _id: "view:child", component: "ChildrenList" },
      { _id: "view:other", component: "EntityDetails" },
    ];
    const routeConfigs2: ViewConfig[] = [
      { _id: "view:child", component: "ChildrenList", config: { foo: 1 } },
      { _id: "view:child2", component: "ChildrenList", config: { foo: 2 } },
    ];

    mockConfigService.getAllConfigs.and.returnValue(routeConfigs1);
    service.initRouting();

    mockConfigService.getAllConfigs.and.returnValue(routeConfigs2);
    service.initRouting();

    const router = TestBed.inject<Router>(Router);
    expect(router.config.find((r) => r.path === "child").data).toEqual({
      config: { foo: 1 },
    });
    expect(router.config.find((r) => r.path === "child2").data).toEqual({
      config: { foo: 2 },
    });
  });

  it("should add the user role guard if userIsPermitted is set", () => {
    const testViewConfigs: ViewConfig[] = [
      { _id: "view:admin", component: "Admin", permittedUserRoles: ["admin"] },
    ];
    const expectedRoutes = [
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [UserRoleGuard],
        data: { permittedUserRoles: ["admin"] },
      },
    ];
    const router = TestBed.inject<Router>(Router);
    spyOn(router, "resetConfig");

    service.reloadRouting(testViewConfigs);

    expect(router.resetConfig).toHaveBeenCalledWith(expectedRoutes);
  });

  it("should set NotFoundComponent for wildcard route", () => {
    const wildcardRoute: Route = {
      path: "**",
      component: ApplicationLoadingComponent,
    };

    service.reloadRouting([], [wildcardRoute]);

    expect(wildcardRoute).toEqual({ path: "**", component: NotFoundComponent });
  });

  it("should log a warning if a view config has a component which is not registered", () => {
    const testViewConfigs: ViewConfig[] = [
      { _id: "view:child", component: "Support" },
    ];

    service.reloadRouting(testViewConfigs);

    expect(mockLoggingService.warn).toHaveBeenCalled();
  });
});
