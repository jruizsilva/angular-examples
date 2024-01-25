import { Component } from '@angular/core';
import { thisIsFineImageUrl } from '../../utils/thisIsFineImageUrl';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="{{ thisIsFineImageUrl }}" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      aperiam libero optio nemo. Blanditiis sint id, iure similique ipsam
      consequatur quaerat voluptas placeat iste reiciendis reprehenderit totam
      dolores omnis. Iure.
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {
  thisIsFineImageUrl = thisIsFineImageUrl;
}
