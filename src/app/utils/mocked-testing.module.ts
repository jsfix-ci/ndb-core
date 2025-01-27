import { ModuleWithProviders, NgModule } from "@angular/core";
import { LocalSession } from "../core/session/session-service/local-session";
import { SessionService } from "../core/session/session-service/session.service";
import { LoginState } from "../core/session/session-states/login-state.enum";
import { EntityMapperService } from "../core/entity/entity-mapper.service";
import { mockEntityMapper } from "../core/entity/mock-entity-mapper-service";
import { User } from "../core/user/user";
import { AnalyticsService } from "../core/analytics/analytics.service";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Angulartics2Module } from "angulartics2";
import { RouterTestingModule } from "@angular/router/testing";
import { Database } from "../core/database/database";
import { AppConfig } from "../core/app-config/app-config";
import { SessionType } from "../core/session/session-type";
import { PouchDatabase } from "../core/database/pouch-database";
import { LOCATION_TOKEN } from "./di-tokens";
import { Entity } from "../core/entity/model/entity";
import { PureAbility } from "@casl/ability";
import { EntityAbility } from "../core/permissions/ability/entity-ability";
import { EntitySchemaService } from "../core/entity/schema/entity-schema.service";
import { DatabaseIndexingService } from "../core/entity/database-indexing/database-indexing.service";
import {
  entityRegistry,
  EntityRegistry,
} from "../core/entity/database-entity.decorator";
import {
  viewRegistry,
  ViewRegistry,
} from "../core/view/dynamic-components/dynamic-component.decorator";
import { RouteRegistry, routesRegistry } from "../app.routing";
import { MatNativeDateModule } from "@angular/material/core";
import {
  ConfigService,
  createTestingConfigService,
} from "../core/config/config.service";

export const TEST_USER = "test";
export const TEST_PASSWORD = "pass";

/**
 * Utility module that can be imported in test files or stories to have mock implementations of the SessionService
 * and the EntityMapper. To use it put `imports: [MockedTestingModule.withState()]` into the module definition of the
 * test or the story.
 * The static method automatically initializes the SessionService and the EntityMapper with a demo user using the
 * TEST_USER and TEST_PASSWORD constants. On default the user will also be logged in. This behavior can be changed
 * by passing a different state to the method e.g. `MockedTestingModule.withState(LoginState.LOGGED_OUT)`.
 * The EntityMapper can be initialized with Entities that are passed as the second argument to the static function.
 *
 * This module provides the services `SessionService` `EntityMapperService` together with other often needed services.
 *
 * If you need a REAL database (e.g. for indices/views) then use the {@link DatabaseTestingModule} instead.
 */
@NgModule({
  imports: [
    NoopAnimationsModule,
    Angulartics2Module.forRoot(),
    RouterTestingModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: AnalyticsService,
      useValue: { eventTrack: () => undefined },
    },
    {
      provide: LOCATION_TOKEN,
      useValue: window.location,
    },
    EntitySchemaService,
    EntityAbility,
    { provide: PureAbility, useExisting: EntityAbility },
    { provide: EntityRegistry, useValue: entityRegistry },
    { provide: ViewRegistry, useValue: viewRegistry },
    { provide: RouteRegistry, useValue: routesRegistry },
    {
      provide: DatabaseIndexingService,
      useValue: {
        createIndex: () => {},
        queryIndexDocsRange: () => Promise.resolve([]),
        queryIndexDocs: () => Promise.resolve([]),
      },
    },
  ],
})
export class MockedTestingModule {
  static withState(
    loginState = LoginState.LOGGED_IN,
    data: Entity[] = []
  ): ModuleWithProviders<MockedTestingModule> {
    AppConfig.settings = {
      site_name: "Aam Digital - DEV",
      session_type: SessionType.mock,
      database: {
        name: "test-db-name",
        remote_url: "https://demo.aam-digital.com/db/",
      },
    };
    const mockedEntityMapper = mockEntityMapper([new User(TEST_USER), ...data]);
    const session = createLocalSession(loginState === LoginState.LOGGED_IN);
    return {
      ngModule: MockedTestingModule,
      providers: [
        {
          provide: SessionService,
          useValue: session,
        },
        { provide: EntityMapperService, useValue: mockedEntityMapper },
        { provide: ConfigService, useValue: createTestingConfigService() },
        { provide: Database, useValue: session.getDatabase() },
      ],
    };
  }
}

function createLocalSession(andLogin?: boolean): SessionService {
  const databaseMock: Partial<PouchDatabase> = {
    isEmpty: () => Promise.resolve(false),
    initIndexedDB: () => undefined,
    initInMemoryDB: () => undefined,
  };
  const localSession = new LocalSession(databaseMock as PouchDatabase);
  localSession.saveUser(
    { name: TEST_USER, roles: ["user_app"] },
    TEST_PASSWORD
  );
  if (andLogin === true) {
    localSession.login(TEST_USER, TEST_PASSWORD);
  }
  return localSession;
}
