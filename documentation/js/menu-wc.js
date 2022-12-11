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
                    <a href="index.html" data-type="index-link">recrutamento-conversor-nodejs-flavio.pprado4_gmail.com documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/ApiConfigModule.html" data-type="entity-link" >ApiConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApiConfigModule-0c2052fafde452e58cd5a2f146c5c3bd35240dde038ce564ea5a58462c31277bd87d4bbd5af5c286651c2d97eeb73196455bc5fcafa8fea5c05bd522781cf167"' : 'data-target="#xs-injectables-links-module-ApiConfigModule-0c2052fafde452e58cd5a2f146c5c3bd35240dde038ce564ea5a58462c31277bd87d4bbd5af5c286651c2d97eeb73196455bc5fcafa8fea5c05bd522781cf167"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiConfigModule-0c2052fafde452e58cd5a2f146c5c3bd35240dde038ce564ea5a58462c31277bd87d4bbd5af5c286651c2d97eeb73196455bc5fcafa8fea5c05bd522781cf167"' :
                                        'id="xs-injectables-links-module-ApiConfigModule-0c2052fafde452e58cd5a2f146c5c3bd35240dde038ce564ea5a58462c31277bd87d4bbd5af5c286651c2d97eeb73196455bc5fcafa8fea5c05bd522781cf167"' }>
                                        <li class="link">
                                            <a href="injectables/ApiConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EnvironmentConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnvironmentConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6f9ae89214342ccf9b251b941dcd72e2eff44c4b7fb42a70465f38f1b2e50624733d09057af9c17dea207e90ef8270f0f26b4d95d6b922f82d889ca139b7ab7f"' : 'data-target="#xs-injectables-links-module-AppModule-6f9ae89214342ccf9b251b941dcd72e2eff44c4b7fb42a70465f38f1b2e50624733d09057af9c17dea207e90ef8270f0f26b4d95d6b922f82d889ca139b7ab7f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6f9ae89214342ccf9b251b941dcd72e2eff44c4b7fb42a70465f38f1b2e50624733d09057af9c17dea207e90ef8270f0f26b4d95d6b922f82d889ca139b7ab7f"' :
                                        'id="xs-injectables-links-module-AppModule-6f9ae89214342ccf9b251b941dcd72e2eff44c4b7fb42a70465f38f1b2e50624733d09057af9c17dea207e90ef8270f0f26b4d95d6b922f82d889ca139b7ab7f"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthUsecasesProxyModule.html" data-type="entity-link" >AuthUsecasesProxyModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BcryptModule.html" data-type="entity-link" >BcryptModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BcryptModule-c76aead2345fbd5da30d95d526b4590b91a75d5c6dba8b08ef3afdcb8838d226939bb80bc65091f167456f1546f937609899c0d42e0dcb4d9810dfe942c3a14e"' : 'data-target="#xs-injectables-links-module-BcryptModule-c76aead2345fbd5da30d95d526b4590b91a75d5c6dba8b08ef3afdcb8838d226939bb80bc65091f167456f1546f937609899c0d42e0dcb4d9810dfe942c3a14e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BcryptModule-c76aead2345fbd5da30d95d526b4590b91a75d5c6dba8b08ef3afdcb8838d226939bb80bc65091f167456f1546f937609899c0d42e0dcb4d9810dfe942c3a14e"' :
                                        'id="xs-injectables-links-module-BcryptModule-c76aead2345fbd5da30d95d526b4590b91a75d5c6dba8b08ef3afdcb8838d226939bb80bc65091f167456f1546f937609899c0d42e0dcb4d9810dfe942c3a14e"' }>
                                        <li class="link">
                                            <a href="injectables/BcryptService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BcryptService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CacheConfigModule.html" data-type="entity-link" >CacheConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CacheConfigModule-e971d1ac1ef449bb708f9b871773ef1a4ac8a2a354a241fad317b09f474aac34b71c9b0b5b4d8819b80d768c36eab548d4719f5c1d0cabb001b86d268fde57db"' : 'data-target="#xs-injectables-links-module-CacheConfigModule-e971d1ac1ef449bb708f9b871773ef1a4ac8a2a354a241fad317b09f474aac34b71c9b0b5b4d8819b80d768c36eab548d4719f5c1d0cabb001b86d268fde57db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CacheConfigModule-e971d1ac1ef449bb708f9b871773ef1a4ac8a2a354a241fad317b09f474aac34b71c9b0b5b4d8819b80d768c36eab548d4719f5c1d0cabb001b86d268fde57db"' :
                                        'id="xs-injectables-links-module-CacheConfigModule-e971d1ac1ef449bb708f9b871773ef1a4ac8a2a354a241fad317b09f474aac34b71c9b0b5b4d8819b80d768c36eab548d4719f5c1d0cabb001b86d268fde57db"' }>
                                        <li class="link">
                                            <a href="injectables/CacheService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CacheService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ControllersModule.html" data-type="entity-link" >ControllersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ControllersModule-33be0fb692368e93829410cad00a5576ff04df8c4c8800dd0451b83578d43d2aa73fc5429deb8ef68a8c06365c408865363241ada17cb354a7fe473f2518234e"' : 'data-target="#xs-controllers-links-module-ControllersModule-33be0fb692368e93829410cad00a5576ff04df8c4c8800dd0451b83578d43d2aa73fc5429deb8ef68a8c06365c408865363241ada17cb354a7fe473f2518234e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ControllersModule-33be0fb692368e93829410cad00a5576ff04df8c4c8800dd0451b83578d43d2aa73fc5429deb8ef68a8c06365c408865363241ada17cb354a7fe473f2518234e"' :
                                            'id="xs-controllers-links-module-ControllersModule-33be0fb692368e93829410cad00a5576ff04df8c4c8800dd0451b83578d43d2aa73fc5429deb8ef68a8c06365c408865363241ada17cb354a7fe473f2518234e"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnvironmentConfigModule.html" data-type="entity-link" >EnvironmentConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EnvironmentConfigModule-6701256b8df0c3ce2271232d28583adca1b007ab395f6323473b03a7a332819ee51deda04b40395608ac4fdbc1239d5f508dacf7606290dd862f36cc65279d4f"' : 'data-target="#xs-injectables-links-module-EnvironmentConfigModule-6701256b8df0c3ce2271232d28583adca1b007ab395f6323473b03a7a332819ee51deda04b40395608ac4fdbc1239d5f508dacf7606290dd862f36cc65279d4f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EnvironmentConfigModule-6701256b8df0c3ce2271232d28583adca1b007ab395f6323473b03a7a332819ee51deda04b40395608ac4fdbc1239d5f508dacf7606290dd862f36cc65279d4f"' :
                                        'id="xs-injectables-links-module-EnvironmentConfigModule-6701256b8df0c3ce2271232d28583adca1b007ab395f6323473b03a7a332819ee51deda04b40395608ac4fdbc1239d5f508dacf7606290dd862f36cc65279d4f"' }>
                                        <li class="link">
                                            <a href="injectables/EnvironmentConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnvironmentConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExceptionsModule.html" data-type="entity-link" >ExceptionsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExceptionsModule-d57c3966583d3795df524c5bef11561d57f3f3111f3c74cd68310ea486aa6b8d17e33d8e803b6c0951da8f7c24d5291fcbe5e86418a336aa80815977d10f94bb"' : 'data-target="#xs-injectables-links-module-ExceptionsModule-d57c3966583d3795df524c5bef11561d57f3f3111f3c74cd68310ea486aa6b8d17e33d8e803b6c0951da8f7c24d5291fcbe5e86418a336aa80815977d10f94bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExceptionsModule-d57c3966583d3795df524c5bef11561d57f3f3111f3c74cd68310ea486aa6b8d17e33d8e803b6c0951da8f7c24d5291fcbe5e86418a336aa80815977d10f94bb"' :
                                        'id="xs-injectables-links-module-ExceptionsModule-d57c3966583d3795df524c5bef11561d57f3f3111f3c74cd68310ea486aa6b8d17e33d8e803b6c0951da8f7c24d5291fcbe5e86418a336aa80815977d10f94bb"' }>
                                        <li class="link">
                                            <a href="injectables/ExceptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExceptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JwtModule.html" data-type="entity-link" >JwtModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JwtModule-d11ca4d8be7344cf6a3933d4fd92c7db2da7da0e8fd4914c65f4bb8f7e7cdf3632a59903e1cfaf0f6a1270a44fb76a8e9255686f069ea8ac8d0f28d02129657c"' : 'data-target="#xs-injectables-links-module-JwtModule-d11ca4d8be7344cf6a3933d4fd92c7db2da7da0e8fd4914c65f4bb8f7e7cdf3632a59903e1cfaf0f6a1270a44fb76a8e9255686f069ea8ac8d0f28d02129657c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JwtModule-d11ca4d8be7344cf6a3933d4fd92c7db2da7da0e8fd4914c65f4bb8f7e7cdf3632a59903e1cfaf0f6a1270a44fb76a8e9255686f069ea8ac8d0f28d02129657c"' :
                                        'id="xs-injectables-links-module-JwtModule-d11ca4d8be7344cf6a3933d4fd92c7db2da7da0e8fd4914c65f4bb8f7e7cdf3632a59903e1cfaf0f6a1270a44fb76a8e9255686f069ea8ac8d0f28d02129657c"' }>
                                        <li class="link">
                                            <a href="injectables/JwtTokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtTokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' : 'data-target="#xs-injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' :
                                        'id="xs-injectables-links-module-LoggerModule-d10d745f06c31e9b53bdbffdfc07cb8977aee9b82c1a82007563f202d9148a3a899f04e11d1146b79d1cbe87a23df40580730f1f28d89b30e4f989dc7d3fcc9e"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoriesModule.html" data-type="entity-link" >RepositoriesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RepositoriesModule-e3e2581b3c7ba66ab80f78869ed0e49e888f4ac79a62aa5f575f41ce7462fb978b7e994afcd03860d735b205c02f62c9a872fe613c6f6cda6889276ebcfdfc7c"' : 'data-target="#xs-injectables-links-module-RepositoriesModule-e3e2581b3c7ba66ab80f78869ed0e49e888f4ac79a62aa5f575f41ce7462fb978b7e994afcd03860d735b205c02f62c9a872fe613c6f6cda6889276ebcfdfc7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepositoriesModule-e3e2581b3c7ba66ab80f78869ed0e49e888f4ac79a62aa5f575f41ce7462fb978b7e994afcd03860d735b205c02f62c9a872fe613c6f6cda6889276ebcfdfc7c"' :
                                        'id="xs-injectables-links-module-RepositoriesModule-e3e2581b3c7ba66ab80f78869ed0e49e888f4ac79a62aa5f575f41ce7462fb978b7e994afcd03860d735b205c02f62c9a872fe613c6f6cda6889276ebcfdfc7c"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseTransactionRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseTransactionRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatabaseUserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseUserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionUsecasesProxyModule.html" data-type="entity-link" >TransactionUsecasesProxyModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TypeOrmConfigModule.html" data-type="entity-link" >TypeOrmConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserUsecasesProxyModule.html" data-type="entity-link" >UserUsecasesProxyModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TransactionController.html" data-type="entity-link" >TransactionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Log.html" data-type="entity-link" >Log</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Transaction.html" data-type="entity-link" >Transaction</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDTO.html" data-type="entity-link" >AuthDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthPresenter.html" data-type="entity-link" >AuthPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionDTO.html" data-type="entity-link" >CreateTransactionDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionUseCase.html" data-type="entity-link" >CreateTransactionUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserUseCase.html" data-type="entity-link" >CreateUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteTransactionUseCase.html" data-type="entity-link" >DeleteTransactionUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUserUseCase.html" data-type="entity-link" >DeleteUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllTransactionUseCase.html" data-type="entity-link" >FindAllTransactionUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllUserUseCase.html" data-type="entity-link" >FindAllUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneTransactionUseCase.html" data-type="entity-link" >FindOneTransactionUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneUserUseCase.html" data-type="entity-link" >FindOneUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUserByKeyUseCase.html" data-type="entity-link" >FindUserByKeyUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUseCase.html" data-type="entity-link" >LoginUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestResponse.html" data-type="entity-link" >NestResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestResponseBuilder.html" data-type="entity-link" >NestResponseBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupContainer.html" data-type="entity-link" >SetupContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupDocumentBuilder.html" data-type="entity-link" >SetupDocumentBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupGlobalFilters.html" data-type="entity-link" >SetupGlobalFilters</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupGlobalInterceptors.html" data-type="entity-link" >SetupGlobalInterceptors</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetupGlobalPipes.html" data-type="entity-link" >SetupGlobalPipes</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionOptionsDTO.html" data-type="entity-link" >TransactionOptionsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionPresenter.html" data-type="entity-link" >TransactionPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDTO.html" data-type="entity-link" >UpdateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserUseCase.html" data-type="entity-link" >UpdateUserUseCase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UseCaseProxy.html" data-type="entity-link" >UseCaseProxy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPresenter.html" data-type="entity-link" >UserPresenter</a>
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
                                    <a href="injectables/ApiConfigService.html" data-type="entity-link" >ApiConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptService.html" data-type="entity-link" >BcryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheService.html" data-type="entity-link" >CacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseTransactionRepository.html" data-type="entity-link" >DatabaseTransactionRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseUserRepository.html" data-type="entity-link" >DatabaseUserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnvironmentConfigService.html" data-type="entity-link" >EnvironmentConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionsService.html" data-type="entity-link" >ExceptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtTokenService.html" data-type="entity-link" >JwtTokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformResponseInterceptor.html" data-type="entity-link" >TransformResponseInterceptor</a>
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
                                <a href="interfaces/AmbientConfig.html" data-type="entity-link" >AmbientConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiConfig.html" data-type="entity-link" >ApiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseConfig.html" data-type="entity-link" >DatabaseConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IApiService.html" data-type="entity-link" >IApiService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuth.html" data-type="entity-link" >IAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthRepository.html" data-type="entity-link" >IAuthRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthRequest.html" data-type="entity-link" >IAuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBcryptService.html" data-type="entity-link" >IBcryptService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICacheManager.html" data-type="entity-link" >ICacheManager</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExceptionService.html" data-type="entity-link" >IExceptionService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatExceptionMessage.html" data-type="entity-link" >IFormatExceptionMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInfo.html" data-type="entity-link" >IInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJwtService.html" data-type="entity-link" >IJwtService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IJwtServicePayload.html" data-type="entity-link" >IJwtServicePayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILogger.html" data-type="entity-link" >ILogger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRates.html" data-type="entity-link" >IRates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISuccessTransaction.html" data-type="entity-link" >ISuccessTransaction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionError.html" data-type="entity-link" >ITransactionError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionOptions.html" data-type="entity-link" >ITransactionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITransactionRepository.html" data-type="entity-link" >ITransactionRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserRepository.html" data-type="entity-link" >IUserRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JWTConfig.html" data-type="entity-link" >JWTConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RedisConfig.html" data-type="entity-link" >RedisConfig</a>
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