import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
apartments:any = {};
description:any 
  constructor() { }

  ngOnInit() {
    this.apartments = {
      "data": [
          {"id" : 1,"tertiary": "2BHK, Hiranandani Atlantis", "gold": true, "apartmenttab": [{"title":"higher floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"garden facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "80,000","sellingPrice" : "70,000","descriptionID":1},
              
          {"id" : 2,"tertiary": "2BHK, Hiranandani Atlantis", "gold": false, "apartmenttab": [{"title":"higher floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"street facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "77,000","sellingPrice" : "67,000","descriptionID":2},
              
          {"id" : 3,"tertiary": "2BHK, Hiranandani Atlantis", "gold": true, "apartmenttab": [{"title":"middle floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"garden facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "75,000","sellingPrice" : "65,000","descriptionID":3},
  
          {"id" : 4,"tertiary": "2BHK, L&T Emerald Isle", "gold": false, "apartmenttab": [{"title":"higher floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"street facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "60,000","sellingPrice" : "52,000","descriptionID":4},
  
          {"id" : 5,"tertiary": "2BHK, L&T Emerald Isle", "gold": false, "apartmenttab": [{"title":"lower floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"garden facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "55,000","sellingPrice" : "48,000","descriptionID":5},
  
          {"id" : 6,"tertiary": "2BHK, L&T Emerald Isle", "gold": false, "apartmenttab": [{"title":"middle floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"street facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "60,000","sellingPrice" : "52,000","descriptionID":6}
      ],
      "description" : [
          {
              "id" : 1, 
              "unitsAvailable" : 2,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"5 others are looking at these homes.",
              "Layout":{
                  "FloorArea" : "765 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
              "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          },
          {
              "id" : 2, 
              "unitsAvailable" : 3,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"4 others are looking to rent these homes.",
              "Layout":{
                  "FloorArea" : "765 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
                            "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          },
          {
              "id" : 3, 
              "unitsAvailable" : 2,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"4 others are looking to rent these homes.",
              "Layout":{
                  "FloorArea" : "765 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
                            "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          },
          {
              "id" : 4, 
              "unitsAvailable" : 5,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"10 others are looking to rent these homes.",
              "Layout":{
                  "FloorArea" : "769 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
              "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          },
          {
              "id" : 5, 
              "unitsAvailable" : 1,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"6 others are looking to rent these homes.",
              "Layout":{
                  "FloorArea" : "850 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
                            "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          },
          {
              "id" : 6, 
              "unitsAvailable" : 1,
              "images": ["flat1.jpeg","flat2.jpeg"],
              "looking":"2 others are looking to rent these homes.",
              "Layout":{
                  "FloorArea" : "598 sqf",
                  "Bedrooms":2,
                  "Bathrooms":2,
                  "Balconies":1
              },
              "ElevationAndOrientation":{
                  "Elevation":"higher",
                  "TotalFloors":24,
                  "Orientation":"E–W, West facing",
                  "view":"garden facing"
              },
                            "UnitAmenities":[
                  {
                    "title":"modular kitchen",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"built-in closet",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"air conditioning",
                    image:"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  { 
                    "title":"ceiling fans",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"gas connection",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                  },
                  {
                    "title":"bathroom fittings",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                  },
                  {
                    "title":"geyser",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  },
                  {
                    "title":"pigeon net",
                    "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                  }
              ],
              "location":{
                  "latitude":"19.1109511",
                  "longitude":"72.9278923"
              },
              "paragraph":{
                  "title":"Central Hiranandani",
                  "description":"Hiranandani Gardens is an upmarket township consisting of condominiums, penthouses, bungalows and commercial complexes in Powai, Mumbai. The neighbourhood offers a wide range of shopping and fine dining options, as well as lifestyle amenities like world-class fitness centres, yoga centres and dance circles. Hiranandani Gardens is accorded as Mumbai's start-up hub, with a good number of office and co-working spaces"
              },
              "PropertyAmenities":[
                {
                  "title":"swimming pool",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"game room",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg "
                },
                {"title":"covered parking",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"elevator",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"walking trails",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                },
                {"title":"24/7 security",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f3216d32e82083399d9f6_AptMidFloorML.svg"
                },
                {"title":"reception desk",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f0d171c29bc3_AptFurnishedML.svg"
                },
                {"title":"playground",
                  "image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321611b3f02f58c29bcd_AptWindowML.svg"
                }
              ]
          }
      ]
    }

    this.getApartmnet({"id" : 1,"tertiary": "2BHK, Hiranandani Atlantis", "gold": true, "apartmenttab": [{"title":"higher floor","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"},{"title":"garden facing","image":"https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4f321677b7c82aa0e5ee12_AptHighFloorML.svg"}], "mrp": "80,000","sellingPrice" : "70,000","descriptionID":1})
  }

  getApartmnet(object){
    console.log(object)
    let apartment = this.apartments.description.filter(e=> e.id == object.descriptionID)
    console.log(apartment)

    object.description = apartment[0]
    console.log(object)
    this.description = object
    console.log(this.description)
  }
}
