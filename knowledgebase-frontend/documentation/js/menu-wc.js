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
                    <a href="index.html" data-type="index-link">knowledgebase-frontend documentation</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9f7ff3cc7778e8ad2b61a3c1f1565d01"' : 'data-target="#xs-components-links-module-AppModule-9f7ff3cc7778e8ad2b61a3c1f1565d01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9f7ff3cc7778e8ad2b61a3c1f1565d01"' :
                                            'id="xs-components-links-module-AppModule-9f7ff3cc7778e8ad2b61a3c1f1565d01"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContentEditorModule.html" data-type="entity-link" >ContentEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContentEditorModule-e231f9dc8758b106e00fb09bc2d6c8ac"' : 'data-target="#xs-components-links-module-ContentEditorModule-e231f9dc8758b106e00fb09bc2d6c8ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentEditorModule-e231f9dc8758b106e00fb09bc2d6c8ac"' :
                                            'id="xs-components-links-module-ContentEditorModule-e231f9dc8758b106e00fb09bc2d6c8ac"' }>
                                            <li class="link">
                                                <a href="components/ActivityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentEditorLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentEditorLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditorHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterfaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WearableCategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearableCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WearableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentEditorRoutingModule.html" data-type="entity-link" >ContentEditorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProcessesModule.html" data-type="entity-link" >ProcessesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' : 'data-target="#xs-components-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' :
                                            'id="xs-components-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' }>
                                            <li class="link">
                                                <a href="components/ProcessCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessesActivitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessesActivitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessesOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessesOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessesResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessesResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' : 'data-target="#xs-pipes-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' :
                                            'id="xs-pipes-links-module-ProcessesModule-916bc5c8c9e0fae684b93b274ebc0d76"' }>
                                            <li class="link">
                                                <a href="pipes/FilterOnCategoryIdPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterOnCategoryIdPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterOnProcessIdPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterOnProcessIdPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProcessesRoutingModule.html" data-type="entity-link" >ProcessesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModuleModule.html" data-type="entity-link" >SharedModuleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModuleModule-aa09033717201375dd5ff65e1f013c1c"' : 'data-target="#xs-components-links-module-SharedModuleModule-aa09033717201375dd5ff65e1f013c1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModuleModule-aa09033717201375dd5ff65e1f013c1c"' :
                                            'id="xs-components-links-module-SharedModuleModule-aa09033717201375dd5ff65e1f013c1c"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WearablesModule.html" data-type="entity-link" >WearablesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WearablesModule-773b0f2b095cda661051ba1d96d1d668"' : 'data-target="#xs-components-links-module-WearablesModule-773b0f2b095cda661051ba1d96d1d668"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WearablesModule-773b0f2b095cda661051ba1d96d1d668"' :
                                            'id="xs-components-links-module-WearablesModule-773b0f2b095cda661051ba1d96d1d668"' }>
                                            <li class="link">
                                                <a href="components/WearablesCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearablesCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WearablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WearablesOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearablesOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WearablesResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WearablesResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WearablesRoutingModule.html" data-type="entity-link" >WearablesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ProcessCategoriesComponent-1.html" data-type="entity-link" >ProcessCategoriesComponent</a>
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
                                    <a href="injectables/ActivityService.html" data-type="entity-link" >ActivityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorizeService.html" data-type="entity-link" >AuthorizeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataTypeService.html" data-type="entity-link" >DataTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeatureService.html" data-type="entity-link" >FeatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterfaceService.html" data-type="entity-link" >InterfaceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcessCategoryService.html" data-type="entity-link" >ProcessCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcessService.html" data-type="entity-link" >ProcessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WearableCategoryService.html" data-type="entity-link" >WearableCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WearableService.html" data-type="entity-link" >WearableService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ContentEditorInterceptor.html" data-type="entity-link" >ContentEditorInterceptor</a>
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
                                <a href="interfaces/Activity.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Authorize.html" data-type="entity-link" >Authorize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataType.html" data-type="entity-link" >DataType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feature.html" data-type="entity-link" >Feature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Interface.html" data-type="entity-link" >Interface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Process.html" data-type="entity-link" >Process</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessCategory.html" data-type="entity-link" >ProcessCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Wearable.html" data-type="entity-link" >Wearable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WearableCategory.html" data-type="entity-link" >WearableCategory</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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