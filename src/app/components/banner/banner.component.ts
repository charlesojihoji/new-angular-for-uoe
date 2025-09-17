import { Component, Input } from '@angular/core';

export interface Image{
  id?: number;
  url: string;
  title: string;
}

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input('dataImage') images: Image[]=[
    {
      url:"https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      title:"Image1"
    },
    {
      url:"https://money.com/wp-content/uploads/2022/08/Best-Colleges-New-York-2022-Feature.jpg?quality=60&w=1200",
      title:"Image2"
    }
  ]
}
