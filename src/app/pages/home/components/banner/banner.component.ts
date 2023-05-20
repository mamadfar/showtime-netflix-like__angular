import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() backdrop_path: string= "";
  @Input() original_title: string= "";
  @Input() overview: string= "";
}
