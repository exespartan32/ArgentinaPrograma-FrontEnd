import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.scss']
})
export class EditBannerComponent implements OnInit {
  banner: Banner = null
  urlImagenBanner
  public archivos: any = []

  constructor(
    private storage: Storage,
    private router: Router,
    private bannerService: BannerService,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerService.detail(id).subscribe(
      data => {
        this.banner = data;
      }, err => {
        alert('error al buscar banner');
        this.router.navigate(['']);
      }
    )
  }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.archivos.push(archivoCapturado);
    //console.log(event.target.files)

    const imgRef = ref(this.storage, `images/${archivoCapturado.name}`)

    uploadBytes(imgRef, archivoCapturado)
      .then(
        async response => {
          const imgRef = response.ref
          const urlImg = await getDownloadURL(imgRef)
          this.urlImagenBanner = urlImg
          console.log("url archivo leido: " + this.urlImagenBanner)
        }
      )
      .catch(error => console.log(error));
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.banner.imagenBanner = this.urlImagenBanner;

    if(!this.urlImagenBanner){
      alert("Error la imagen todavia no se ha guardado en la base de datos por favor espero unos momentos");
    }else{
      if(this.banner.imagenBanner){
        this.bannerService.update(id, this.banner).subscribe(
          data => {
            alert('banner actualizado correctamente')
            this.router.navigate(['']);
          }, err => {
            alert("Error al modificar banner");
            this.router.navigate(['']);
          }
        )
      }
    }
  }
}
