import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Banner = null;
  isLogged = false;

  constructor(
    private bannerService:BannerService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarBanner();
  }

  cargarBanner(){
    this.bannerService.getBanner().subscribe(data => { 
      this.banner = data 
    })
  }



}
