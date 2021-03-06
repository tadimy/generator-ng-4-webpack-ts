// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 4
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
// import '@angularclass/hmr';

// RxJS
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

// Web dependencies

if ('production' === ENV) {
    // Production
} else {
    // Development
}
