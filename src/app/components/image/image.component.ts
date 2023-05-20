import {Component, Input} from '@angular/core';
import {IMAGE_BASE_URL} from "../../config/API";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() image_url: string = "";
  @Input() title: string = "";
  @Input() id?: string = "";
  @Input() class?: string = "";

  image_placeholder: string = "../../../assets/image-placeholder.png";

  ImageUrlResolver(imageUrl: string) {
    if (imageUrl) return `${IMAGE_BASE_URL}/${imageUrl}`
    return this.image_placeholder;
  }
}
