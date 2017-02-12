import {Component, OnInit, Input} from '@angular/core';
import {TvmazeService} from '../tvmaze.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shows:any;
  sliderValue:number = 5;
  query:string;

  constructor(private maze:TvmazeService) {
    this.query = TvmazeService.query;
  }

  searchInput(){
    TvmazeService.query = this.query;
    this.searchMaze();
  }

  ngOnInit() {
    this.searchMaze();
  }

  private searchMaze(){
    this.maze.search(this.query).subscribe(
      data => {this.shows=data;},
    );
  }


}
