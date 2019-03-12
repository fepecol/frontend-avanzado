import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../shared/services/offers.service';
import { Offer } from '../../shared/models/offer';
import { UsersService } from '../../shared/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers: Offer[];
  myOffers: Offer[];
  dispOffers: Offer[];
  offer: Offer;
  userId: number;
  detail: boolean=false;
  viewMyOffers: boolean=false;
  titulo: string="Ofertas disponibles";

  constructor(private route: ActivatedRoute,
    private offerservice: OffersService, 
    private usersservice: UsersService,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.userId = params.userId);
    this.offerservice.getOffers().subscribe(offers => {
      console.log(offers);
      this.dispOffers=offers;
      this.offers=offers;
    })
  }

  detalle(offer){
    this.offer=offer;
    console.log(offer);
    console.log('ver mis ofertas',this.viewMyOffers);
    this.detail=true;
  }

  getMyOffers(){
    console.log('mis ofertas');
    this.viewMyOffers=true;
    if(this.myOffers==undefined){
      this.usersservice.getUser(this.userId).subscribe(user => {
        this.titulo="Mis ofertas";
        this.myOffers=user.offers.entities;
        this.offers=user.offers.entities;
        console.log(this.myOffers);
      })
    }else{
      this.titulo="Mis ofertas";
      this.offers=this.myOffers;
    }
  }

  getOffers(){
    this.viewMyOffers=false;
    this.offers=this.dispOffers;
  }

  onEdit(ev){
    console.log(ev);
    this.detail=false;
  }

}
