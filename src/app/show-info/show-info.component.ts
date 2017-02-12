import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute}   from '@angular/router';
import {TvmazeService} from "../tvmaze.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  show:any;
  showId:any;

  constructor(private route: ActivatedRoute, private maze:TvmazeService, private location:Location) {
    // Recogemos los parametros de la URL
    this.route.params.subscribe(params => {this.showId = params;});
  }

  ngOnInit() {
    this.maze.searchById(this.showId.id).subscribe(
      data => {this.show=data;});
  }

  goBack(): void {
    this.location.back();
  }


}
