import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input() section_name: Movies_Type | null = null;
  @Input() movies_list: ReadonlyArray<IMovie> | undefined=[];
  name: string = "";

  constructor() {}
  ngOnInit() {
    this.name = `${this?.section_name} Movies`;
  }
}
