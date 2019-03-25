import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  base_url: string = 'http://mybackend.com/api/';
  endpoint = 'offers';

  constructor(private http: HttpClient) {}

  //Gets all Offers
  getOffers() {
      return this.http
      .get<Offer[]>(this.base_url + this.endpoint);
  } //getOffers

  getOffer(offerId) {
    return this.http
    .get<Offer>(`${this.base_url + this.endpoint}/${offerId}`);
  } //getOffers

  //Creates a task
  createOffer(offer) {
    return this.http
    .post<any>(this.base_url + this.endpoint, offer);
  } //createOffers

  //Updates a Offers
  updateOffer(update) {
      return this.http
      .put<any>(this.base_url + this.endpoint, update);
  } //updateOffers

  //Deletes a Offers
  deleteOffer(OfferId) {
      return this.http
      .delete<any>(`${this.base_url + this.endpoint}/${OfferId}`);
  } //deleteOffers

}
