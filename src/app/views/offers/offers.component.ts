import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../shared/services/offers.service';
import { Offer } from '../../shared/models/offer';
import { EmpresasService } from '../../shared/services/empresas.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { Empresa } from '../../shared/models/empresa';

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
  empresaId: number;
  empresa: Empresa;
  detail: boolean=false;
  empresaProfile: boolean=false;
  viewMyOffers: boolean=false;
  titulo: string="Ofertas disponibles";

  constructor(private route: ActivatedRoute,
    private offerservice: OffersService, 
    private usersservice: UsersService, 
    private empresasservice: EmpresasService,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.userId = params.userId);
    this.route.queryParams.subscribe(params => this.empresaId = params.empresaId);
    if(this.userId!=undefined){
      console.log('user',this.userId);
      this.offerservice.getOffers().subscribe(offers => {
        console.log(offers);
        this.dispOffers=offers;
        this.offers=offers;
      })
    }
    if(this.empresaId!=undefined){
      this.userId=1;
      this.empresaProfile=true;
      console.log('empresa',this.empresaId);
      this.titulo="Mis ofertas publicadas";
      this.empresasservice.getEmpresa(this.empresaId).subscribe(empresa => {
        this.empresa=empresa;
        console.log(empresa.ofertas.entities);
        this.offers=empresa.ofertas.entities;
      })
    }
    
  }

  detalle(offer){
    this.offer=offer;
    this.empresaProfile=false;
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

  editOffer(item,i){
    console.log('editar oferta',i);
    this.offer=item;
    this.detail=true;
  }

  newOffer(){
    this.offer={
      id: NaN,
      puesto: '',
      descripcion: '',
      empresa: '',
      familia: '',
      fecha: '',
      provincia: '',
      municipio: '',
      titulos: '',
      estado: '',
    };
    this.detail=true;
  }

  onEdit(ev){
    console.log(ev);
    this.detail=false;
  }

}
