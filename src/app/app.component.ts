import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from './core/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymKeeper';

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count')
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }


  reset() {
    this.store.dispatch(reset())
  }
}
