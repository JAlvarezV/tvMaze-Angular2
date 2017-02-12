import { Component, OnInit } from '@angular/core';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { TvmazeService } from '../tvmaze.service';
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  shows: Observable<any>;
  searchTerms = new Subject<string>();

  constructor(private maze:TvmazeService,private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.shows = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.maze.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any>([]);
      });
  }

}
