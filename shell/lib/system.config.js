System.config({
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:": "https://unpkg.com/",
    "local:": "./node_modules/",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "shell.bundle.js": [
      "shell.js",
      "state.js",
      "node_modules/redux/dist/redux.min.js",
      "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
      "node_modules/@angular/core/bundles/core.umd.js",
      "node_modules/rxjs/Subject.js",
      "node_modules/rxjs/symbol/rxSubscriber.js",
      "node_modules/rxjs/util/root.js",
      "node_modules/rxjs/SubjectSubscription.js",
      "node_modules/rxjs/Subscription.js",
      "node_modules/rxjs/util/UnsubscriptionError.js",
      "node_modules/rxjs/util/errorObject.js",
      "node_modules/rxjs/util/tryCatch.js",
      "node_modules/rxjs/util/isFunction.js",
      "node_modules/rxjs/util/isObject.js",
      "node_modules/rxjs/util/isArray.js",
      "node_modules/rxjs/util/ObjectUnsubscribedError.js",
      "node_modules/rxjs/Subscriber.js",
      "node_modules/rxjs/Observer.js",
      "node_modules/rxjs/Observable.js",
      "node_modules/rxjs/symbol/observable.js",
      "node_modules/rxjs/util/toSubscriber.js",
      "node_modules/rxjs/operator/share.js",
      "node_modules/rxjs/operator/multicast.js",
      "node_modules/rxjs/observable/ConnectableObservable.js",
      "node_modules/rxjs/observable/merge.js",
      "node_modules/rxjs/operator/merge.js",
      "node_modules/rxjs/util/isScheduler.js",
      "node_modules/rxjs/operator/mergeAll.js",
      "node_modules/rxjs/util/subscribeToResult.js",
      "node_modules/rxjs/InnerSubscriber.js",
      "node_modules/rxjs/symbol/iterator.js",
      "node_modules/rxjs/util/isPromise.js",
      "node_modules/rxjs/util/isArrayLike.js",
      "node_modules/rxjs/OuterSubscriber.js",
      "node_modules/rxjs/observable/ArrayObservable.js",
      "node_modules/rxjs/observable/EmptyObservable.js",
      "node_modules/rxjs/observable/ScalarObservable.js",
      "node_modules/@angular/common/bundles/common.umd.js",
      "node_modules/@angular/compiler/bundles/compiler.umd.js",
      "node_modules/single-spa/lib/single-spa.js",
      "node_modules/reflect-metadata/Reflect.js",
      "node_modules/zone.js/dist/zone.js"
    ]
  },

  packages: {
    "rxjs": {
      "defaultExtension": "js"
    }
  },

  map: {
    "@angular/animations": "local:@angular/animations/bundles/animations.umd.js",
    "@angular/animations/browser": "local:@angular/animations/bundles/animations-browser.umd.js",
    "@angular/common": "local:@angular/common/bundles/common.umd.js",
    "@angular/common/testing": "local:@angular/common/bundles/common-testing.umd.js",
    "@angular/compiler": "local:@angular/compiler/bundles/compiler.umd.js",
    "@angular/compiler/testing": "local:@angular/compiler/bundles/compiler-testing.umd.js",
    "@angular/core": "local:@angular/core/bundles/core.umd.js",
    "@angular/core/testing": "local:@angular/core/bundles/core-testing.umd.js",
    "@angular/forms": "local:@angular/forms/bundles/forms.umd.js",
    "@angular/http": "local:@angular/http/bundles/http.umd.js",
    "@angular/http/testing": "local:@angular/http/bundles/http-testing.umd.js",
    "@angular/platform-browser": "local:@angular/platform-browser/bundles/platform-browser.umd.js",
    "@angular/platform-browser-dynamic": "local:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
    "@angular/platform-browser-dynamic/testing": "local:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js",
    "@angular/platform-browser/animations": "local:@angular/platform-browser/bundles/platform-browser-animations.umd.js",
    "@angular/platform-browser/testing": "local:@angular/platform-browser/bundles/platform-browser-testing.umd.js",
    "@angular/router": "local:@angular/router/bundles/router.umd.js",
    "@angular/router/testing": "local:@angular/router/bundles/router-testing.umd.js",
    "app": "./src",
    "plugin-babel": "./node_modules/systemjs-plugin-babel/plugin-babel.js",
    "redux": "local:redux/dist/redux.min.js",
    "reflect-metadata": "local:reflect-metadata/Reflect.js",
    "rxjs": "local:rxjs",
    "single-spa": "local:single-spa/lib/single-spa.js",
    "single-spa-angular2": "local:single-spa-angular2/lib/single-spa-angular2.js",
    "systemjs-babel-build": "./node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",
    "tslib": "local:tslib",
    "typescript": "local:typescript/lib/typescript.js",
    "zone.js": "local:zone.js/dist/zone.js"
  }
});
