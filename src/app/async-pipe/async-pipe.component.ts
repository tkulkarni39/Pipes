import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  promise: Promise<{}>;
  observable$: Observable<number>;
  subscription: object = null;
  observableData: number;
  promiseData: any;

  constructor() {
    this.getPromise().then(val => this.promiseData = val);
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  getObservable() {
    return interval(1000).pipe(
      take(10),
      map(v => v * v * v)
    );
  }
  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(
      v => (this.observableData = v)
    );
  }

  getPromise() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Promise complete!'), 2000);
    });
  }



}
