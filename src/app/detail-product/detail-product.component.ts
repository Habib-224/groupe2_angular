// import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  produitId: number;
  produits: any[] = [
    {
        Productid:'1',
        ProductName:'Macbook pro 2019',
        ProductImg : 'https://img.freepik.com/psd-gratuit/ordinateur-portable-fond-bleu-maquette_1022-178.jpg?w=826&t=st=1698921371~exp=1698921971~hmac=072e2fe76807439264bdae061a0033d2e261cccce1e5a173a782d3ad27a87766',
        Productdescription:'Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
        ProductPrice: '$ 1500'
        },
        {
          Productid:'2',
          ProductName:'Macbook pro 2020',
          ProductImg : 'https://img.freepik.com/photos-gratuite/ordinateur-portable-ecran-blanc-canape_23-2147924385.jpg?w=900&t=st=1698922280~exp=1698922880~hmac=fbbe5a28f00adc5eb39a114f4047a3db53247c59f73725abdb373c7e6eb6dfd0',
          Productdescription:'Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 2200'
        },
        {
          Productid:'3',
          ProductName:'Appareil Photo',
          ProductImg : 'https://img.freepik.com/photos-gratuite/appareil-photo-professionnel-flou_169016-10249.jpg?w=996&t=st=1698922336~exp=1698922936~hmac=a3f5efbbda867d85a51cf9158d960f8b1cb079dfa5a56f7c61d05dc01107323f',
          Productdescription:'Appareil est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 700'
        },
        {
          Productid:'4',
          ProductName:'iphone 13 pro ',
          ProductImg : 'https://img.freepik.com/psd-gratuit/maquette-smartphone-plein-ecran_53876-65975.jpg?w=740&t=st=1698922421~exp=1698923021~hmac=7877c77509ca75006821917d6422495254ab187d1cdc24e6e662dc18fd7b18de',
          Productdescription:'Iphone est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 1200'
        },
        {
          Productid:'5',
          ProductName:'iphone 13 pro ',
          ProductImg : 'https://img.freepik.com/psd-gratuit/maquette-smartphone_1310-873.jpg?w=996&t=st=1698939277~exp=1698939877~hmac=3ecc151a20ba58c5bb66a6ad64ece848bd0d1c670fb4999a3eea227673139228',
          Productdescription:'Iphone est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 1200'
        },
        {
          Productid:'6',
          ProductName:'iphone 13 pro ',
          ProductImg : 'https://img.freepik.com/photos-gratuite/composition-elegante-du-smartphone_23-2149437106.jpg?w=360&t=st=1698939322~exp=1698939922~hmac=237bffa5e6e4042cb7a42a6f4efde64d36f8f12627b3294b2d8d0e3fda6a4e74',
          Productdescription:'Iphone est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 1200'
        },
        {
          Productid:'7',
          ProductName:'iphone 13 pro ',
          ProductImg : 'https://img.freepik.com/photos-gratuite/poste-travail-3d-ordinateur-peripheriques_23-2150714201.jpg?w=740&t=st=1698939356~exp=1698939956~hmac=c87a0c53815b09c28b4882bc9f62b961881bc37591d1b1d4c344bbfa97b2dada',
          Productdescription:'Iphone est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 1200'
        },
        {
          Productid:'8',
          ProductName:'iphone 13 pro ',
          ProductImg : 'https://img.freepik.com/photos-gratuite/poste-travail-3d-ordinateur-peripheriques_23-2150714201.jpg?w=740&t=st=1698939356~exp=1698939956~hmac=c87a0c53815b09c28b4882bc9f62b961881bc37591d1b1d4c344bbfa97b2dada',
          Productdescription:'Iphone est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel. Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à iBook et au PowerBook de 12 pouces dans le cadre de la transition Apple vers des processeurs Intel.',
          ProductPrice: '$ 1200'
        },
   ];
  produitDetails: any;

  constructor(private route: ActivatedRoute) {
    this.produitId = 0;
  }



  db:any
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let produtidentifiant =this.produitId = +params['id'] -1; // Récupérer l'ID du produit à partir de l'URL
      // console.log(produtidentifiant);
      // const products = JSON.parse(localStorage.getItem('products') || '[]');
      // const productId = +this.produitId; // Convertit l'ID du produit en nombre
      // this.produits = products.find((p: any) => p.id === productId);
      // this.db = JSON.parse(localStorage.getItem('tabProducts')||[])
    });
  }
}
