'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ndb-core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Developer Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/overview.html" data-type="entity-link" data-context-id="additional">Overview</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/tutorial.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' : 'data-target="#xs-additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' }>
                                                <span class="link-name">Tutorial</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' : 'id="xs-additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/overview-of-technologies.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overview of Technologies</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/setting-up-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Setting up the project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/using-aam-digital-(as-a-user).html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Using Aam Digital (as a user)</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/diving-into-the-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Diving into the Code</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/how-to-guides.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' : 'data-target="#xs-additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' }>
                                                <span class="link-name">How-To Guides</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' : 'id="xs-additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/navigate-the-code-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Navigate the Code Structure</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/contribute-code-to-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Contribute Code to the Project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/load-and-save-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Load and Save Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-dialogs-and-notifications.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Dialogs and Notifications</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-related-entities.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Related Entities</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/log-errors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Log Errors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/write-automated-unit-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Write Automated Unit Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/write-e2e-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Write E2E Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/document-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Document Code</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/use-queries-and-indices.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Use Queries and Indices</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/create-a-new-entity-type.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Create a New Entity Type</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/generate-demo-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Generate Demo Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/review-a-pull-request.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Review a Pull Request</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/create-a-report.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Create a Report</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/format-data-export.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Format Data Export</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/build-localizable-components.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Build Localizable Components</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/work-with-xlf.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Work with XLF</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/add-another-language.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Add Another Language</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/concepts.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' : 'data-target="#xs-additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' }>
                                                <span class="link-name">Concepts</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' : 'id="xs-additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/overall-architecture.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overall Architecture</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/entity-schema.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Entity Schema</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/session-and-authentication-system.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Session and Authentication System</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/configuration.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Configuration</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/user-roles-and-permissions.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">User Roles and Permissions</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/ux-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">UX Guidelines</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/documentation-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Documentation Structure</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/infrastructure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Infrastructure</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' : 'data-target="#xs-components-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' :
                                            'id="xs-components-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' : 'data-target="#xs-injectables-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' :
                                        'id="xs-injectables-links-module-AdminModule-302c5362473e7a8c5cbce04b74f913e12b1b4691b53ad1eee69aa1c491bc322c2c178e3baf42b2a4e32888282d11b025fbb91ef38762e814b1252433ed001c8a"' }>
                                        <li class="link">
                                            <a href="injectables/BackupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChildPhotoUpdateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildPhotoUpdateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertsModule.html" data-type="entity-link" >AlertsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' : 'data-target="#xs-components-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' :
                                            'id="xs-components-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' : 'data-target="#xs-injectables-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' :
                                        'id="xs-injectables-links-module-AlertsModule-f7c7a5df0e62066006dd04237f5ada351711c951dbac07d90fb40838e915dcdcb938d4f13e99e86bc7f2751d393d5e6161daecc85d523f34a32f342925309c05"' }>
                                        <li class="link">
                                            <a href="injectables/AlertService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' : 'data-target="#xs-components-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' :
                                            'id="xs-components-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' : 'data-target="#xs-injectables-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' :
                                        'id="xs-injectables-links-module-AppModule-26660d999efb6d8d8386023ec480ad25a245bedbf35c50641b60874835aaf637ec57ce78db2cf368f75e729c834f9cf8d7e81a730531c604c93adeb1ac348f41"' }>
                                        <li class="link">
                                            <a href="injectables/AnalyticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalyticsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AttendanceModule.html" data-type="entity-link" >AttendanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AttendanceModule-951ad294690ecc9e06e2769d8c38f11ec9d758f83ac240654a758fc57c6d3126c8faf1da6f06e02685badc0c2178abb84e4d0d020a4e0e2392ed3cb18271ac72"' : 'data-target="#xs-components-links-module-AttendanceModule-951ad294690ecc9e06e2769d8c38f11ec9d758f83ac240654a758fc57c6d3126c8faf1da6f06e02685badc0c2178abb84e4d0d020a4e0e2392ed3cb18271ac72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AttendanceModule-951ad294690ecc9e06e2769d8c38f11ec9d758f83ac240654a758fc57c6d3126c8faf1da6f06e02685badc0c2178abb84e4d0d020a4e0e2392ed3cb18271ac72"' :
                                            'id="xs-components-links-module-AttendanceModule-951ad294690ecc9e06e2769d8c38f11ec9d758f83ac240654a758fc57c6d3126c8faf1da6f06e02685badc0c2178abb84e4d0d020a4e0e2392ed3cb18271ac72"' }>
                                            <li class="link">
                                                <a href="components/ActivityAttendanceSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityAttendanceSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivityCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddDayAttendanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDayAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceCalendarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceCalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDayBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceDayBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceStatusSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceStatusSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceWeekDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceWeekDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupedChildAttendanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupedChildAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentAttendanceBlocksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecentAttendanceBlocksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RollCallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RollCallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RollCallSetupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RollCallSetupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RollCallTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RollCallTabComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChildrenModule.html" data-type="entity-link" >ChildrenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' : 'data-target="#xs-components-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' :
                                            'id="xs-components-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' }>
                                            <li class="link">
                                                <a href="components/AserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BirthdayDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BirthdayDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BmiBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BmiBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenBmiDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenBmiDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenCountDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenCountDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducationalMaterialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EducationalMaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthCheckupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthCheckupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviousSchoolsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviousSchoolsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' : 'data-target="#xs-injectables-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' :
                                        'id="xs-injectables-links-module-ChildrenModule-622dcbd985f08065e6d2bcd15b96ce0a8e4a3ed028bc6a030ee906d461236bc6695de6c7f0a74f9fffd1798c361260a920f6173502ba061169292257983d641a"' }>
                                        <li class="link">
                                            <a href="injectables/ChildrenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComingSoonModule.html" data-type="entity-link" >ComingSoonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComingSoonModule-359f151ecb8310a8c44a6e5e19df7428207706149d669721b90ca9ada9454fbed2ab98834f82bb8dd5870b98595d3f1ec4f1afc042ac67ee17a29e03945a8ebc"' : 'data-target="#xs-components-links-module-ComingSoonModule-359f151ecb8310a8c44a6e5e19df7428207706149d669721b90ca9ada9454fbed2ab98834f82bb8dd5870b98595d3f1ec4f1afc042ac67ee17a29e03945a8ebc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComingSoonModule-359f151ecb8310a8c44a6e5e19df7428207706149d669721b90ca9ada9454fbed2ab98834f82bb8dd5870b98595d3f1ec4f1afc042ac67ee17a29e03945a8ebc"' :
                                            'id="xs-components-links-module-ComingSoonModule-359f151ecb8310a8c44a6e5e19df7428207706149d669721b90ca9ada9454fbed2ab98834f82bb8dd5870b98595d3f1ec4f1afc042ac67ee17a29e03945a8ebc"' }>
                                            <li class="link">
                                                <a href="components/ComingSoonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComingSoonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfigModule-ee578c695b2f95db504225902c7201ec7195b893a4d44d0cf95f519e9acefe953e40e88c86827e105dd5e2888cc35f80c9ff683c02065423d9c8e6292e46294b"' : 'data-target="#xs-injectables-links-module-ConfigModule-ee578c695b2f95db504225902c7201ec7195b893a4d44d0cf95f519e9acefe953e40e88c86827e105dd5e2888cc35f80c9ff683c02065423d9c8e6292e46294b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfigModule-ee578c695b2f95db504225902c7201ec7195b893a4d44d0cf95f519e9acefe953e40e88c86827e105dd5e2888cc35f80c9ff683c02065423d9c8e6292e46294b"' :
                                        'id="xs-injectables-links-module-ConfigModule-ee578c695b2f95db504225902c7201ec7195b893a4d44d0cf95f519e9acefe953e40e88c86827e105dd5e2888cc35f80c9ff683c02065423d9c8e6292e46294b"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurableEnumModule.html" data-type="entity-link" >ConfigurableEnumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' : 'data-target="#xs-components-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' :
                                            'id="xs-components-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' }>
                                            <li class="link">
                                                <a href="components/DisplayConfigurableEnumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayConfigurableEnumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditConfigurableEnumComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditConfigurableEnumComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' : 'data-target="#xs-directives-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' :
                                        'id="xs-directives-links-module-ConfigurableEnumModule-8e45142532f59f7df0ded9962b4788997db7c50d5f6d099d6face3d5641b9dc54b920299ae513e33c5605cc3434ef5ce58b565db5a45e49a53a97ec50f29d57f"' }>
                                        <li class="link">
                                            <a href="directives/ConfigurableEnumDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurableEnumDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmationDialogModule.html" data-type="entity-link" >ConfirmationDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' : 'data-target="#xs-components-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' :
                                            'id="xs-components-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' : 'data-target="#xs-injectables-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' :
                                        'id="xs-injectables-links-module-ConfirmationDialogModule-4c955ffcb0a4f33f1e19f1b8d7ddddd570a3f9f451ab0cc56edbe215e847f7c0ae8dabdad44db38427f5714ca6029892b26c5fe9969c07b7aad46e32f43133d7"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmationDialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConflictResolutionModule.html" data-type="entity-link" >ConflictResolutionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConflictResolutionModule-643ff62b429ef6510e7d5ca96f6642328fb6dcfaf09208c7363b8cde54d0d325b3e2bc462b0471beb6024d56444701c04cc6f06501b211f44ab66148347132c6"' : 'data-target="#xs-components-links-module-ConflictResolutionModule-643ff62b429ef6510e7d5ca96f6642328fb6dcfaf09208c7363b8cde54d0d325b3e2bc462b0471beb6024d56444701c04cc6f06501b211f44ab66148347132c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConflictResolutionModule-643ff62b429ef6510e7d5ca96f6642328fb6dcfaf09208c7363b8cde54d0d325b3e2bc462b0471beb6024d56444701c04cc6f06501b211f44ab66148347132c6"' :
                                            'id="xs-components-links-module-ConflictResolutionModule-643ff62b429ef6510e7d5ca96f6642328fb6dcfaf09208c7363b8cde54d0d325b3e2bc462b0471beb6024d56444701c04cc6f06501b211f44ab66148347132c6"' }>
                                            <li class="link">
                                                <a href="components/CompareRevComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompareRevComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConflictResolutionListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConflictResolutionListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConflictResolutionRoutingModule.html" data-type="entity-link" >ConflictResolutionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-5b316d653581a0df01436b861b453b3945b59f428cbdbdfd7572eff383ce533a7fc8616289f9143c4ee6b43b31f453a57c56b4a21c4cff90058b1da314049264"' : 'data-target="#xs-components-links-module-DashboardModule-5b316d653581a0df01436b861b453b3945b59f428cbdbdfd7572eff383ce533a7fc8616289f9143c4ee6b43b31f453a57c56b4a21c4cff90058b1da314049264"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-5b316d653581a0df01436b861b453b3945b59f428cbdbdfd7572eff383ce533a7fc8616289f9143c4ee6b43b31f453a57c56b4a21c4cff90058b1da314049264"' :
                                            'id="xs-components-links-module-DashboardModule-5b316d653581a0df01436b861b453b3945b59f428cbdbdfd7572eff383ce533a7fc8616289f9143c4ee6b43b31f453a57c56b4a21c4cff90058b1da314049264"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardShortcutWidgetModule.html" data-type="entity-link" >DashboardShortcutWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardShortcutWidgetModule-92523c9b1697d2126ad48654c5ffc9237fc0628f16a8c7aab8a56d60a2ab7a059d346c3b8b883c62a352eedf6e314f12b9fcdf372bd80e86d9e22ff0032d1ab8"' : 'data-target="#xs-components-links-module-DashboardShortcutWidgetModule-92523c9b1697d2126ad48654c5ffc9237fc0628f16a8c7aab8a56d60a2ab7a059d346c3b8b883c62a352eedf6e314f12b9fcdf372bd80e86d9e22ff0032d1ab8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardShortcutWidgetModule-92523c9b1697d2126ad48654c5ffc9237fc0628f16a8c7aab8a56d60a2ab7a059d346c3b8b883c62a352eedf6e314f12b9fcdf372bd80e86d9e22ff0032d1ab8"' :
                                            'id="xs-components-links-module-DashboardShortcutWidgetModule-92523c9b1697d2126ad48654c5ffc9237fc0628f16a8c7aab8a56d60a2ab7a059d346c3b8b883c62a352eedf6e314f12b9fcdf372bd80e86d9e22ff0032d1ab8"' }>
                                            <li class="link">
                                                <a href="components/DashboardShortcutWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardShortcutWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' : 'data-target="#xs-injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' :
                                        'id="xs-injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' }>
                                        <li class="link">
                                            <a href="injectables/PouchDatabase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PouchDatabase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseTestingModule.html" data-type="entity-link" >DatabaseTestingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseTestingModule-b0c9e26b5d38f3d8c20361e15894354269d099c440859ad5e183c3fe2111cff0a7bb5784fb0d9f860e00f2c6c5227d109c0d74541c0bb7a8d4790b4cd49a8752"' : 'data-target="#xs-injectables-links-module-DatabaseTestingModule-b0c9e26b5d38f3d8c20361e15894354269d099c440859ad5e183c3fe2111cff0a7bb5784fb0d9f860e00f2c6c5227d109c0d74541c0bb7a8d4790b4cd49a8752"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseTestingModule-b0c9e26b5d38f3d8c20361e15894354269d099c440859ad5e183c3fe2111cff0a7bb5784fb0d9f860e00f2c6c5227d109c0d74541c0bb7a8d4790b4cd49a8752"' :
                                        'id="xs-injectables-links-module-DatabaseTestingModule-b0c9e26b5d38f3d8c20361e15894354269d099c440859ad5e183c3fe2111cff0a7bb5784fb0d9f860e00f2c6c5227d109c0d74541c0bb7a8d4790b4cd49a8752"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseIndexingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseIndexingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityMapperService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntitySchemaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySchemaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoggingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PouchDatabase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PouchDatabase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataImportModule.html" data-type="entity-link" >DataImportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' : 'data-target="#xs-components-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' :
                                            'id="xs-components-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' }>
                                            <li class="link">
                                                <a href="components/DataImportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataImportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' : 'data-target="#xs-injectables-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' :
                                        'id="xs-injectables-links-module-DataImportModule-6e49a57fbd4cbc954fbd5916662d8acfb3aa7e2d461303e18719216ace2ca20c2ce5202e83c4a82be06246e46d1976d37c681e2a6d43096e783d314a37b85760"' }>
                                        <li class="link">
                                            <a href="injectables/DataImportService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataImportService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DemoDataModule.html" data-type="entity-link" >DemoDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' : 'data-target="#xs-components-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' :
                                            'id="xs-components-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' }>
                                            <li class="link">
                                                <a href="components/DemoDataGeneratingProgressDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataGeneratingProgressDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' : 'data-target="#xs-injectables-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' :
                                        'id="xs-injectables-links-module-DemoDataModule-da39c897c84cc9c8b1053534a413a83ea2a1704a8b39c56e003ae404fcc1e03b7d2d34464f1b72b2e18add08d44d5d9c672d2c9812922c1555d3ea57db32d2ae"' }>
                                        <li class="link">
                                            <a href="injectables/DemoDataInitializerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataInitializerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityDetailsModule.html" data-type="entity-link" >EntityDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntityDetailsModule-949ee84e3578bdfedcea2b43ebbe10a56595a89785436641d822820725f053047293b60bdef32b8c151be08c9b29a78d89de5317921287ac4a7e679f06ba7bb1"' : 'data-target="#xs-components-links-module-EntityDetailsModule-949ee84e3578bdfedcea2b43ebbe10a56595a89785436641d822820725f053047293b60bdef32b8c151be08c9b29a78d89de5317921287ac4a7e679f06ba7bb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntityDetailsModule-949ee84e3578bdfedcea2b43ebbe10a56595a89785436641d822820725f053047293b60bdef32b8c151be08c9b29a78d89de5317921287ac4a7e679f06ba7bb1"' :
                                            'id="xs-components-links-module-EntityDetailsModule-949ee84e3578bdfedcea2b43ebbe10a56595a89785436641d822820725f053047293b60bdef32b8c151be08c9b29a78d89de5317921287ac4a7e679f06ba7bb1"' }>
                                            <li class="link">
                                                <a href="components/EntityDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityFormModule.html" data-type="entity-link" >EntityFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' : 'data-target="#xs-components-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' :
                                            'id="xs-components-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' }>
                                            <li class="link">
                                                <a href="components/EntityFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' : 'data-target="#xs-injectables-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' :
                                        'id="xs-injectables-links-module-EntityFormModule-b48dc434d0fc7b6b7ffa6976f23b33f4d28812321897c569b9513526892577e8631df5db5ccaecbb4d7d362a86f871b163cd78d696e0ef1119b4097b062d23d2"' }>
                                        <li class="link">
                                            <a href="injectables/EntityFormService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityFormService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityListModule.html" data-type="entity-link" >EntityListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntityListModule-42a2761023f26cef924a2c1f8ef0876247e49e55c227dfbdb1aacbf70ae5d68b0bd26d41d50306dc01a70addf5a0b010759c13e0994e830791e45fc41b2a6f6c"' : 'data-target="#xs-components-links-module-EntityListModule-42a2761023f26cef924a2c1f8ef0876247e49e55c227dfbdb1aacbf70ae5d68b0bd26d41d50306dc01a70addf5a0b010759c13e0994e830791e45fc41b2a6f6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntityListModule-42a2761023f26cef924a2c1f8ef0876247e49e55c227dfbdb1aacbf70ae5d68b0bd26d41d50306dc01a70addf5a0b010759c13e0994e830791e45fc41b2a6f6c"' :
                                            'id="xs-components-links-module-EntityListModule-42a2761023f26cef924a2c1f8ef0876247e49e55c227dfbdb1aacbf70ae5d68b0bd26d41d50306dc01a70addf5a0b010759c13e0994e830791e45fc41b2a6f6c"' }>
                                            <li class="link">
                                                <a href="components/EntityListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterOverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link" >EntityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EntityModule-39e26fe6ad3ec979af6b1a910ae11779b8b613518518233d5de53ca55c634f9482b9013ca8d430464df8181f413d8b87e2aa2d43a930c9e7b3a0c709ea134331"' : 'data-target="#xs-injectables-links-module-EntityModule-39e26fe6ad3ec979af6b1a910ae11779b8b613518518233d5de53ca55c634f9482b9013ca8d430464df8181f413d8b87e2aa2d43a930c9e7b3a0c709ea134331"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityModule-39e26fe6ad3ec979af6b1a910ae11779b8b613518518233d5de53ca55c634f9482b9013ca8d430464df8181f413d8b87e2aa2d43a930c9e7b3a0c709ea134331"' :
                                        'id="xs-injectables-links-module-EntityModule-39e26fe6ad3ec979af6b1a910ae11779b8b613518518233d5de53ca55c634f9482b9013ca8d430464df8181f413d8b87e2aa2d43a930c9e7b3a0c709ea134331"' }>
                                        <li class="link">
                                            <a href="injectables/EntityConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityMapperService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntitySchemaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySchemaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntitySubrecordModule.html" data-type="entity-link" >EntitySubrecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntitySubrecordModule-b3e46fbd12eca953b2e6d496380b364064f5137166bad0ba5de5d46eb25c7e602ca0d3e0e1a917eb6408b493a02cf36211b8a9a63e22c79fb9b61bcbfde53948"' : 'data-target="#xs-components-links-module-EntitySubrecordModule-b3e46fbd12eca953b2e6d496380b364064f5137166bad0ba5de5d46eb25c7e602ca0d3e0e1a917eb6408b493a02cf36211b8a9a63e22c79fb9b61bcbfde53948"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntitySubrecordModule-b3e46fbd12eca953b2e6d496380b364064f5137166bad0ba5de5d46eb25c7e602ca0d3e0e1a917eb6408b493a02cf36211b8a9a63e22c79fb9b61bcbfde53948"' :
                                            'id="xs-components-links-module-EntitySubrecordModule-b3e46fbd12eca953b2e6d496380b364064f5137166bad0ba5de5d46eb25c7e602ca0d3e0e1a917eb6408b493a02cf36211b8a9a63e22c79fb9b61bcbfde53948"' }>
                                            <li class="link">
                                                <a href="components/EntitySubrecordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySubrecordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPaginatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPaginatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RowDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RowDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityUtilsModule.html" data-type="entity-link" >EntityUtilsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' : 'data-target="#xs-components-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' :
                                            'id="xs-components-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' }>
                                            <li class="link">
                                                <a href="components/DisplayCheckmarkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayCheckmarkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayEntityArrayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayEntityArrayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayEntityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayEntityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayPercentageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayPercentageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisplayUnitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisplayUnitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditAgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBooleanComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBooleanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditEntityArrayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditEntityArrayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditLongTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditLongTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditNumberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditNumberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPhotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditPhotoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditSingleEntityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditSingleEntityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitySelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorHintComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorHintComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReadonlyFunctionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadonlyFunctionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' : 'data-target="#xs-pipes-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' :
                                            'id="xs-pipes-links-module-EntityUtilsModule-1f7458e1b9378f37dfb9c71efcbd942dd3177799fbccf0b2a0edd0297cfc1028fb6dfb56e2d63a7f0e675aa389956067fb7c5d6103adca7b69de4da2e340aad1"' }>
                                            <li class="link">
                                                <a href="pipes/EntityFunctionPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityFunctionPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExportModule.html" data-type="entity-link" >ExportModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' : 'data-target="#xs-directives-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' :
                                        'id="xs-directives-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' }>
                                        <li class="link">
                                            <a href="directives/ExportDataDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExportDataDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' : 'data-target="#xs-injectables-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' :
                                        'id="xs-injectables-links-module-ExportModule-faa76199526a49534675e74905dda726a38d1de1995999c8b719847016fe13c4203845e201ce13b405c93cdaa4df571ab6047f1b1a0adc5ea99996c2a0b8e220"' }>
                                        <li class="link">
                                            <a href="injectables/DownloadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DownloadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormDialogModule.html" data-type="entity-link" >FormDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' : 'data-target="#xs-components-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' :
                                            'id="xs-components-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' }>
                                            <li class="link">
                                                <a href="components/FormDialogWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDialogWrapperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' : 'data-target="#xs-injectables-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' :
                                        'id="xs-injectables-links-module-FormDialogModule-9752ecde2d20006ccccb7eb3896125d39a95ad5373bfb636de03f555ddd988c5498e441517b98d92bbcaeb909ecb7690f7f35bf748e89269e2a2f20f24e5945a"' }>
                                        <li class="link">
                                            <a href="injectables/FormDialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoricalDataModule.html" data-type="entity-link" >HistoricalDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HistoricalDataModule-40635b7691cc8a485120d37070dfbfb172bf750c4ef2cb15dfc01ff31ffb1d78e9e40df13bf63ccfd40fe57d53ce10a08f1dd48954881fba026ba35573b87d4b"' : 'data-target="#xs-components-links-module-HistoricalDataModule-40635b7691cc8a485120d37070dfbfb172bf750c4ef2cb15dfc01ff31ffb1d78e9e40df13bf63ccfd40fe57d53ce10a08f1dd48954881fba026ba35573b87d4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoricalDataModule-40635b7691cc8a485120d37070dfbfb172bf750c4ef2cb15dfc01ff31ffb1d78e9e40df13bf63ccfd40fe57d53ce10a08f1dd48954881fba026ba35573b87d4b"' :
                                            'id="xs-components-links-module-HistoricalDataModule-40635b7691cc8a485120d37070dfbfb172bf750c4ef2cb15dfc01ff31ffb1d78e9e40df13bf63ccfd40fe57d53ce10a08f1dd48954881fba026ba35573b87d4b"' }>
                                            <li class="link">
                                                <a href="components/HistoricalDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoricalDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageModule.html" data-type="entity-link" >LanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' : 'data-target="#xs-components-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' :
                                            'id="xs-components-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' }>
                                            <li class="link">
                                                <a href="components/LanguageSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' : 'data-target="#xs-injectables-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' :
                                        'id="xs-injectables-links-module-LanguageModule-56f6bf1135d8edd7a8a0b9cd9e44806f58bb60826d715d5a50fd569f21a9c356a55c117162c43981ef0dc0fc5d64bb4519b410d97bc5a8c859cfecf84e01134a"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatestChangesModule.html" data-type="entity-link" >LatestChangesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' : 'data-target="#xs-components-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' :
                                            'id="xs-components-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' }>
                                            <li class="link">
                                                <a href="components/AppVersionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppVersionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangelogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangelogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' : 'data-target="#xs-injectables-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' :
                                        'id="xs-injectables-links-module-LatestChangesModule-de8c5b26e2d8c3ad3d43feae1611d750da574256284c41496c6c5bfc5985f09f53b28fbc90acf933e728d79e5e0baa08784362caa2128d34fc7f2c673271de7d"' }>
                                        <li class="link">
                                            <a href="injectables/LatestChangesDialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatestChangesDialogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LatestChangesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatestChangesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarkdownPageModule.html" data-type="entity-link" >MarkdownPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarkdownPageModule-83d63b5ba2f378c195db90c818ca75f871331a71b10c13d5038e289cf1794ffe1c73e2c47869a65ed9b4b2727524a75d96962780dd8a642a0f8620ce70de33e9"' : 'data-target="#xs-components-links-module-MarkdownPageModule-83d63b5ba2f378c195db90c818ca75f871331a71b10c13d5038e289cf1794ffe1c73e2c47869a65ed9b4b2727524a75d96962780dd8a642a0f8620ce70de33e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarkdownPageModule-83d63b5ba2f378c195db90c818ca75f871331a71b10c13d5038e289cf1794ffe1c73e2c47869a65ed9b4b2727524a75d96962780dd8a642a0f8620ce70de33e9"' :
                                            'id="xs-components-links-module-MarkdownPageModule-83d63b5ba2f378c195db90c818ca75f871331a71b10c13d5038e289cf1794ffe1c73e2c47869a65ed9b4b2727524a75d96962780dd8a642a0f8620ce70de33e9"' }>
                                            <li class="link">
                                                <a href="components/MarkdownPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarkdownPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MockedTestingModule.html" data-type="entity-link" >MockedTestingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MockedTestingModule-14665c43a7785037a7c4889768ef37f6cd3273ce0e9e820e23ad3e3b36bb8944d71d6b3994267f4ae5d14933e1616c3e09ec502d96364441bfcb04fb341c6ac5"' : 'data-target="#xs-injectables-links-module-MockedTestingModule-14665c43a7785037a7c4889768ef37f6cd3273ce0e9e820e23ad3e3b36bb8944d71d6b3994267f4ae5d14933e1616c3e09ec502d96364441bfcb04fb341c6ac5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MockedTestingModule-14665c43a7785037a7c4889768ef37f6cd3273ce0e9e820e23ad3e3b36bb8944d71d6b3994267f4ae5d14933e1616c3e09ec502d96364441bfcb04fb341c6ac5"' :
                                        'id="xs-injectables-links-module-MockedTestingModule-14665c43a7785037a7c4889768ef37f6cd3273ce0e9e820e23ad3e3b36bb8944d71d6b3994267f4ae5d14933e1616c3e09ec502d96364441bfcb04fb341c6ac5"' }>
                                        <li class="link">
                                            <a href="injectables/EntityAbility.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityAbility</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntitySchemaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntitySchemaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link" >NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-aa83208271e1901d999227059a980dcfc9142ca18549c3998cdc127fdf7930cab6b5b370f00dabf64dd5f53fba0bfdf157437a06f2844ae61c0883383de14b46"' : 'data-target="#xs-components-links-module-NavigationModule-aa83208271e1901d999227059a980dcfc9142ca18549c3998cdc127fdf7930cab6b5b370f00dabf64dd5f53fba0bfdf157437a06f2844ae61c0883383de14b46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-aa83208271e1901d999227059a980dcfc9142ca18549c3998cdc127fdf7930cab6b5b370f00dabf64dd5f53fba0bfdf157437a06f2844ae61c0883383de14b46"' :
                                            'id="xs-components-links-module-NavigationModule-aa83208271e1901d999227059a980dcfc9142ca18549c3998cdc127fdf7930cab6b5b370f00dabf64dd5f53fba0bfdf157437a06f2844ae61c0883383de14b46"' }>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link" >NotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotesModule-72234470cbbcd2fab9d4ad62b19a1fbecffad01d2bdf6bdc79e071c0d85c2ccff26db65ea9e7b0975fb0d3563590650ef4f040750f8d2880a6dd484540b919f5"' : 'data-target="#xs-components-links-module-NotesModule-72234470cbbcd2fab9d4ad62b19a1fbecffad01d2bdf6bdc79e071c0d85c2ccff26db65ea9e7b0975fb0d3563590650ef4f040750f8d2880a6dd484540b919f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotesModule-72234470cbbcd2fab9d4ad62b19a1fbecffad01d2bdf6bdc79e071c0d85c2ccff26db65ea9e7b0975fb0d3563590650ef4f040750f8d2880a6dd484540b919f5"' :
                                            'id="xs-components-links-module-NotesModule-72234470cbbcd2fab9d4ad62b19a1fbecffad01d2bdf6bdc79e071c0d85c2ccff26db65ea9e7b0975fb0d3563590650ef4f040750f8d2880a6dd484540b919f5"' }>
                                            <li class="link">
                                                <a href="components/ChildMeetingNoteAttendanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildMeetingNoteAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteAttendanceCountBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteAttendanceCountBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesOfChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesOfChildComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' : 'data-target="#xs-components-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' :
                                            'id="xs-components-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                            <li class="link">
                                                <a href="components/DisabledWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisabledWrapperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' : 'data-target="#xs-directives-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' :
                                        'id="xs-directives-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                        <li class="link">
                                            <a href="directives/DisableEntityOperationDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisableEntityOperationDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' : 'data-target="#xs-injectables-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' :
                                        'id="xs-injectables-links-module-PermissionsModule-8e6eb393c097bc836c4593e4a43ad2e0fd10b4751e8ab4cb474a362356609ff7d56e13876e3a610893f2bf01bf503610631672b883bcdc68515d19e3956c47cb"' }>
                                        <li class="link">
                                            <a href="injectables/AbilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityAbility.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityAbility</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PermissionEnforcerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionEnforcerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProgressDashboardWidgetModule.html" data-type="entity-link" >ProgressDashboardWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProgressDashboardWidgetModule-152576dfaf785613e0dffa4a6747e2cfbc972b1892c09059406783d4fdbcaeb388b307a2beac7340dfa580fdf9ab63acde5486dbdc8b64155a303926ee478b7a"' : 'data-target="#xs-components-links-module-ProgressDashboardWidgetModule-152576dfaf785613e0dffa4a6747e2cfbc972b1892c09059406783d4fdbcaeb388b307a2beac7340dfa580fdf9ab63acde5486dbdc8b64155a303926ee478b7a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProgressDashboardWidgetModule-152576dfaf785613e0dffa4a6747e2cfbc972b1892c09059406783d4fdbcaeb388b307a2beac7340dfa580fdf9ab63acde5486dbdc8b64155a303926ee478b7a"' :
                                            'id="xs-components-links-module-ProgressDashboardWidgetModule-152576dfaf785613e0dffa4a6747e2cfbc972b1892c09059406783d4fdbcaeb388b307a2beac7340dfa580fdf9ab63acde5486dbdc8b64155a303926ee478b7a"' }>
                                            <li class="link">
                                                <a href="components/EditProgressDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProgressDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PwaInstallModule.html" data-type="entity-link" >PwaInstallModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' : 'data-target="#xs-components-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' :
                                            'id="xs-components-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' }>
                                            <li class="link">
                                                <a href="components/PwaInstallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PwaInstallComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' : 'data-target="#xs-injectables-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' :
                                        'id="xs-injectables-links-module-PwaInstallModule-7a4ab894b77be465ac9d6262d6a4730f3edd1fb4b0e8d1e5831bded8029dcbb13320cedda12791620a8391e824b991df58a824c1529eb6de5f936215fa980f4d"' }>
                                        <li class="link">
                                            <a href="injectables/PwaInstallService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PwaInstallService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportingModule.html" data-type="entity-link" >ReportingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportingModule-1a472aa9f422a3d824f8e161274d2f1210c39e3e8160e3cec3950cb03c6f56cf1d4810ca4ea6af700959132d3aa102beb8c7012c76bea12294b72f2a5aebb59b"' : 'data-target="#xs-components-links-module-ReportingModule-1a472aa9f422a3d824f8e161274d2f1210c39e3e8160e3cec3950cb03c6f56cf1d4810ca4ea6af700959132d3aa102beb8c7012c76bea12294b72f2a5aebb59b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportingModule-1a472aa9f422a3d824f8e161274d2f1210c39e3e8160e3cec3950cb03c6f56cf1d4810ca4ea6af700959132d3aa102beb8c7012c76bea12294b72f2a5aebb59b"' :
                                            'id="xs-components-links-module-ReportingModule-1a472aa9f422a3d824f8e161274d2f1210c39e3e8160e3cec3950cb03c6f56cf1d4810ca4ea6af700959132d3aa102beb8c7012c76bea12294b72f2a5aebb59b"' }>
                                            <li class="link">
                                                <a href="components/ObjectTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectReportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolsModule.html" data-type="entity-link" >SchoolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchoolsModule-70c59f90ba418dcef91661104ddb333b643146e3e507cfbb246b03cfe4bdaf9d20c6b19410fca50cd0eeb00c5613abb971aaca478d2a3751ddad7726e396047c"' : 'data-target="#xs-components-links-module-SchoolsModule-70c59f90ba418dcef91661104ddb333b643146e3e507cfbb246b03cfe4bdaf9d20c6b19410fca50cd0eeb00c5613abb971aaca478d2a3751ddad7726e396047c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolsModule-70c59f90ba418dcef91661104ddb333b643146e3e507cfbb246b03cfe4bdaf9d20c6b19410fca50cd0eeb00c5613abb971aaca478d2a3751ddad7726e396047c"' :
                                            'id="xs-components-links-module-SchoolsModule-70c59f90ba418dcef91661104ddb333b643146e3e507cfbb246b03cfe4bdaf9d20c6b19410fca50cd0eeb00c5613abb971aaca478d2a3751ddad7726e396047c"' }>
                                            <li class="link">
                                                <a href="components/ActivitiesOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChildrenOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolBlockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolBlockComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link" >SessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' : 'data-target="#xs-components-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' :
                                            'id="xs-components-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' : 'data-target="#xs-injectables-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' :
                                        'id="xs-injectables-links-module-SessionModule-6e8474aa85e4c40614a9c46e1c23c7d95c2f52e27e1842e0870de0b935061b681dc8c2c55e7a49c9baa3df789e0f5ea3c28ae70d9c1e24a3af4c383edf19b3dc"' }>
                                        <li class="link">
                                            <a href="injectables/LocalSession.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalSession</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RemoteSession.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoteSession</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SyncedSessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyncedSessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StorybookBaseModule.html" data-type="entity-link" >StorybookBaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SupportModule.html" data-type="entity-link" >SupportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SupportModule-8e07735e2193d0aceeb5092dc3f548b7c0a31d7aa32f887f3f904ae5c5c70a58085600618b091670551d6ebcee3d19915ce4d096333650a5cbbc778299495f15"' : 'data-target="#xs-components-links-module-SupportModule-8e07735e2193d0aceeb5092dc3f548b7c0a31d7aa32f887f3f904ae5c5c70a58085600618b091670551d6ebcee3d19915ce4d096333650a5cbbc778299495f15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupportModule-8e07735e2193d0aceeb5092dc3f548b7c0a31d7aa32f887f3f904ae5c5c70a58085600618b091670551d6ebcee3d19915ce4d096333650a5cbbc778299495f15"' :
                                            'id="xs-components-links-module-SupportModule-8e07735e2193d0aceeb5092dc3f548b7c0a31d7aa32f887f3f904ae5c5c70a58085600618b091670551d6ebcee3d19915ce4d096333650a5cbbc778299495f15"' }>
                                            <li class="link">
                                                <a href="components/SupportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SyncStatusModule.html" data-type="entity-link" >SyncStatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SyncStatusModule-02196b11cf8b1051961d9241b18aa2df862d543c17cb977cbaa579f5595660594977393c4ae2155439c4842b1a4bce9f9c7a706e6e814e0a0e5ffd5a83cd6112"' : 'data-target="#xs-components-links-module-SyncStatusModule-02196b11cf8b1051961d9241b18aa2df862d543c17cb977cbaa579f5595660594977393c4ae2155439c4842b1a4bce9f9c7a706e6e814e0a0e5ffd5a83cd6112"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyncStatusModule-02196b11cf8b1051961d9241b18aa2df862d543c17cb977cbaa579f5595660594977393c4ae2155439c4842b1a4bce9f9c7a706e6e814e0a0e5ffd5a83cd6112"' :
                                            'id="xs-components-links-module-SyncStatusModule-02196b11cf8b1051961d9241b18aa2df862d543c17cb977cbaa579f5595660594977393c4ae2155439c4842b1a4bce9f9c7a706e6e814e0a0e5ffd5a83cd6112"' }>
                                            <li class="link">
                                                <a href="components/BackgroundProcessingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackgroundProcessingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SyncStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyncStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabStateModule.html" data-type="entity-link" >TabStateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' : 'data-target="#xs-directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' :
                                        'id="xs-directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' }>
                                        <li class="link">
                                            <a href="directives/TabStateMemoDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabStateMemoDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-57bf1576a22064de40e2840edf67ab3ee7408529935a874603a1215853639a273bb3ce823243523038a97fd7e3aa402486c3d88773fb1957c28bd025801e8844"' : 'data-target="#xs-components-links-module-UiModule-57bf1576a22064de40e2840edf67ab3ee7408529935a874603a1215853639a273bb3ce823243523038a97fd7e3aa402486c3d88773fb1957c28bd025801e8844"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-57bf1576a22064de40e2840edf67ab3ee7408529935a874603a1215853639a273bb3ce823243523038a97fd7e3aa402486c3d88773fb1957c28bd025801e8844"' :
                                            'id="xs-components-links-module-UiModule-57bf1576a22064de40e2840edf67ab3ee7408529935a874603a1215853639a273bb3ce823243523038a97fd7e3aa402486c3d88773fb1957c28bd025801e8844"' }>
                                            <li class="link">
                                                <a href="components/PrimaryActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrimaryActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-5697adb618c6adba7c413d20e34f27024fa29f178770974736b83c0e37dc2abeeb41ef120a5820a57af8295d45ef5a8d9fa44408b622aac017dd1c94d3ff5962"' : 'data-target="#xs-components-links-module-UserModule-5697adb618c6adba7c413d20e34f27024fa29f178770974736b83c0e37dc2abeeb41ef120a5820a57af8295d45ef5a8d9fa44408b622aac017dd1c94d3ff5962"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-5697adb618c6adba7c413d20e34f27024fa29f178770974736b83c0e37dc2abeeb41ef120a5820a57af8295d45ef5a8d9fa44408b622aac017dd1c94d3ff5962"' :
                                            'id="xs-components-links-module-UserModule-5697adb618c6adba7c413d20e34f27024fa29f178770974736b83c0e37dc2abeeb41ef120a5820a57af8295d45ef5a8d9fa44408b622aac017dd1c94d3ff5962"' }>
                                            <li class="link">
                                                <a href="components/UserAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link" >ViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' : 'data-target="#xs-components-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' :
                                            'id="xs-components-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' }>
                                            <li class="link">
                                                <a href="components/ApplicationLoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationLoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaDynamicIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaDynamicIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' : 'data-target="#xs-directives-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' :
                                        'id="xs-directives-links-module-ViewModule-368b221adb7ba3bfc32d9b031ddabec00b2a418e8a1d40a151ff54b016ccc7d11d37366e28b7a87fd326938867660beafe343a3a3295c44b4c09d97021eb2466"' }>
                                        <li class="link">
                                            <a href="directives/DynamicComponentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicComponentDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/ViewDirective.html" data-type="entity-link" >ViewDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ActivityAttendance.html" data-type="entity-link" >ActivityAttendance</a>
                            </li>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link" >Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Aser.html" data-type="entity-link" >Aser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Changelog.html" data-type="entity-link" >Changelog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Child.html" data-type="entity-link" >Child</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChildSchoolRelation.html" data-type="entity-link" >ChildSchoolRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigurableEnumDatatype.html" data-type="entity-link" >ConfigurableEnumDatatype</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFaker.html" data-type="entity-link" >CustomFaker</a>
                            </li>
                            <li class="link">
                                <a href="classes/Database.html" data-type="entity-link" >Database</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseException.html" data-type="entity-link" >DatabaseException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoChildConfig.html" data-type="entity-link" >DemoChildConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataGenerator.html" data-type="entity-link" >DemoDataGenerator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataServiceConfig.html" data-type="entity-link" >DemoDataServiceConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEducationMaterialConfig.html" data-type="entity-link" >DemoEducationMaterialConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEventsConfig.html" data-type="entity-link" >DemoEventsConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoHistoricalDataConfig.html" data-type="entity-link" >DemoHistoricalDataConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoNoteConfig.html" data-type="entity-link" >DemoNoteConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoSchoolConfig.html" data-type="entity-link" >DemoSchoolConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditComponent.html" data-type="entity-link" >EditComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/EducationalMaterial.html" data-type="entity-link" >EducationalMaterial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityRegistry.html" data-type="entity-link" >EntityRegistry</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventAttendance.html" data-type="entity-link" >EventAttendance</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventNote.html" data-type="entity-link" >EventNote</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterSelection.html" data-type="entity-link" >FilterSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormCurrentErrorStateMatcher.html" data-type="entity-link" >FormCurrentErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthCheck.html" data-type="entity-link" >HealthCheck</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoricalEntityData.html" data-type="entity-link" >HistoricalEntityData</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockEntityMapperService.html" data-type="entity-link" >MockEntityMapperService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObservableMatchersImpl.html" data-type="entity-link" >ObservableMatchersImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhotoDatatype.html" data-type="entity-link" >PhotoDatatype</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressDashboardConfig.html" data-type="entity-link" >ProgressDashboardConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryDataSource.html" data-type="entity-link" >QueryDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecurringActivity.html" data-type="entity-link" >RecurringActivity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Registry.html" data-type="entity-link" >Registry</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteRegistry.html" data-type="entity-link" >RouteRegistry</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionService.html" data-type="entity-link" >SessionService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestEntity.html" data-type="entity-link" >TestEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/ViewRegistry.html" data-type="entity-link" >ViewRegistry</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AttendanceService.html" data-type="entity-link" >AttendanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutoResolutionService.html" data-type="entity-link" >AutoResolutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChildPhotoService.html" data-type="entity-link" >ChildPhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComingSoonDialogService.html" data-type="entity-link" >ComingSoonDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoActivityEventsGeneratorService.html" data-type="entity-link" >DemoActivityEventsGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoActivityGeneratorService.html" data-type="entity-link" >DemoActivityGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAserGeneratorService.html" data-type="entity-link" >DemoAserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildGenerator.html" data-type="entity-link" >DemoChildGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildSchoolRelationGenerator.html" data-type="entity-link" >DemoChildSchoolRelationGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoConfigGeneratorService.html" data-type="entity-link" >DemoConfigGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoDataService.html" data-type="entity-link" >DemoDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoEducationalMaterialGeneratorService.html" data-type="entity-link" >DemoEducationalMaterialGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHealthCheckGeneratorService.html" data-type="entity-link" >DemoHealthCheckGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHistoricalDataGenerator.html" data-type="entity-link" >DemoHistoricalDataGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoNoteGeneratorService.html" data-type="entity-link" >DemoNoteGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoPermissionGeneratorService.html" data-type="entity-link" >DemoPermissionGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoProgressDashboardWidgetGeneratorService.html" data-type="entity-link" >DemoProgressDashboardWidgetGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoSchoolGenerator.html" data-type="entity-link" >DemoSchoolGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoUserGeneratorService.html" data-type="entity-link" >DemoUserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicValidatorsService.html" data-type="entity-link" >DynamicValidatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityRemoveService.html" data-type="entity-link" >EntityRemoveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportService.html" data-type="entity-link" >ExportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterGeneratorService.html" data-type="entity-link" >FilterGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoricalDataService.html" data-type="entity-link" >HistoricalDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HorizontalHammerConfig.html" data-type="entity-link" >HorizontalHammerConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingErrorHandler.html" data-type="entity-link" >LoggingErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryService.html" data-type="entity-link" >QueryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportingService.html" data-type="entity-link" >ReportingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link" >RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserAccountService.html" data-type="entity-link" >UserAccountService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/UserRoleGuard.html" data-type="entity-link" >UserRoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddDayAttendanceConfig.html" data-type="entity-link" >AddDayAttendanceConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aggregation.html" data-type="entity-link" >Aggregation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceInfo.html" data-type="entity-link" >AttendanceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceReport.html" data-type="entity-link" >AttendanceReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceStatusType.html" data-type="entity-link" >AttendanceStatusType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceWeekRow.html" data-type="entity-link" >AttendanceWeekRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AverageAttendanceStats.html" data-type="entity-link" >AverageAttendanceStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackgroundProcessState.html" data-type="entity-link" >BackgroundProcessState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BmiRow.html" data-type="entity-link" >BmiRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BooleanFilterConfig.html" data-type="entity-link" >BooleanFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CalculateReportOptions.html" data-type="entity-link" >CalculateReportOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildWithRecentNoteInfo.html" data-type="entity-link" >ChildWithRecentNoteInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnGroupsConfig.html" data-type="entity-link" >ColumnGroupsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurableEnumFilterConfig.html" data-type="entity-link" >ConfigurableEnumFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurableEnumValue.html" data-type="entity-link" >ConfigurableEnumValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogButton.html" data-type="entity-link" >ConfirmationDialogButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogConfig.html" data-type="entity-link" >ConfirmationDialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConflictResolutionStrategy.html" data-type="entity-link" >ConflictResolutionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseRules.html" data-type="entity-link" >DatabaseRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseUser.html" data-type="entity-link" >DatabaseUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailsComponentData.html" data-type="entity-link" >DetailsComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DynamicComponentConfig.html" data-type="entity-link" >DynamicComponentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditProgressDashboardComponentData.html" data-type="entity-link" >EditProgressDashboardComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPropertyConfig.html" data-type="entity-link" >EditPropertyConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EncryptedPassword.html" data-type="entity-link" >EncryptedPassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityConfig.html" data-type="entity-link" >EntityConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityDetailsConfig.html" data-type="entity-link" >EntityDetailsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityListConfig.html" data-type="entity-link" >EntityListConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaDatatype.html" data-type="entity-link" >EntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaField.html" data-type="entity-link" >EntitySchemaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportColumnConfig.html" data-type="entity-link" >ExportColumnConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportRow.html" data-type="entity-link" >ExportRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterComponentSettings.html" data-type="entity-link" >FilterComponentSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterConfig.html" data-type="entity-link" >FilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterOverlayData.html" data-type="entity-link" >FilterOverlayData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSelectionOption.html" data-type="entity-link" >FilterSelectionOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormFieldConfig.html" data-type="entity-link" >FormFieldConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupByDescription.html" data-type="entity-link" >GroupByDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupConfig.html" data-type="entity-link" >GroupConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link" >IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImportMetaData.html" data-type="entity-link" >ImportMetaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InteractionType.html" data-type="entity-link" >InteractionType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalUser.html" data-type="entity-link" >LocalUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkdownPageConfig.html" data-type="entity-link" >MarkdownPageConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationMenuConfig.html" data-type="entity-link" >NavigationMenuConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotesManagerConfig.html" data-type="entity-link" >NotesManagerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObservableMatchers.html" data-type="entity-link" >ObservableMatchers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnInitDynamicComponent.html" data-type="entity-link" >OnInitDynamicComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Panel.html" data-type="entity-link" >Panel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelConfig.html" data-type="entity-link" >PanelConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Photo.html" data-type="entity-link" >Photo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrebuiltFilterConfig.html" data-type="entity-link" >PrebuiltFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressDashboardPart.html" data-type="entity-link" >ProgressDashboardPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RemoveEntityTextOptions.html" data-type="entity-link" >RemoveEntityTextOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportConfig.html" data-type="entity-link" >ReportConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportingComponentConfig.html" data-type="entity-link" >ReportingComponentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportRow.html" data-type="entity-link" >ReportRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteData.html" data-type="entity-link" >RouteData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShowsEntity.html" data-type="entity-link" >ShowsEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableRow.html" data-type="entity-link" >TableRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UiConfig.html" data-type="entity-link" >UiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatedEntity.html" data-type="entity-link" >UpdatedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsageAnalyticsConfig.html" data-type="entity-link" >UsageAnalyticsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewConfig.html" data-type="entity-link" >ViewConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewPropertyConfig.html" data-type="entity-link" >ViewPropertyConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});