import { Component } from '@angular/core';
import { BannerComponent, Image } from '../../components/banner/banner.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: Image[]=[
      {
        url:"https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        title:"Image1"
      },
      {
        url:"https://money.com/wp-content/uploads/2022/08/Best-Colleges-New-York-2022-Feature.jpg?quality=60&w=1200",
        title:"Image2"
      },
      {
        url:"https://thecriticalreader.com/wp-content/uploads/2018/08/university-2704306_640.jpg",
        title:"Image3"
      },
      {
        url:"https://as2.ftcdn.net/v2/jpg/04/60/08/53/1000_F_460085365_RX2qSv6zxhyabEPZi5Az8yaKrqgEKgCt.jpg",
        title:"Image4"
      }
    ]
}
