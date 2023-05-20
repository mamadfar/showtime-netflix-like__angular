import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input() section_name: string="";
  @Input() movies_list: ReadonlyArray<IMovie> | undefined=[];
}
