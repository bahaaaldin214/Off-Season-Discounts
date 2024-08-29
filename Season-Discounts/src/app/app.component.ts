import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//interface Item {
//  name: string
//  images: any[],
//  price: Number,

//}


export class AppComponent implements OnInit{
  isAdmin = false;  // This will be dynamically set based on sign-in status

  toggleView() {
    this.isAdmin = !this.isAdmin;
  }

  
  constructor() { }

  ngOnInit() {

    const entries = Object.entries(this.data)
    for (let i = 0; i < entries.length; i++) {

      let key = entries[i][0];
      let value = entries[i][1];

        let name: string = key;
        let newItem: object = {
          name: key,
          images: value.images,
          price: Math.ceil(value.price)
        }
        this.items.push(newItem)

    }

  }

  data: object = {
    "Sunjoy 10 X 10 Foot Hampton Soft Top Gazebo with Mosquito Netting Brown": {
      "price": 94.5,
      "images": [
        "61cf8+lC7bL._AC_SL1500_.jpg",
        "61cuIGrnMcL._AC_SL1000_.jpg",
        "710Q0+R1E8L._AC_.jpg",
        "711HtBVcZPL._AC_SL1500_.jpg"
      ]
    },
    "water skis O'brien  kids all star 46_": {
      "price": 114.8,
      "images": [
        "81WM2GoA-NL._AC_SL1500_.jpg",
        "0.jpg",
        "71eIkUlruwL._AC_SL1500_.jpg",
        "71Ku7Uzc4lL._AC_SL1500_.jpg"
      ]
    },
    "Intex 28210EH 12 Foot X 30 Inch Above Ground Swimming Pool (Pump Not Included)": {
      "price": 123.89999999999999,
      "images": [
        "616PVkL-h4L._AC_SL1500_.jpg",
        "71AMOzcddcL._AC_SL1500_.jpg",
        "71wFWbLZNjL._AC_SL1500_.jpg",
        "81L0BVPt0cL._AC_SL1500_.jpg",
        "81MvvGL5JxL._AC_SL1500_.jpg",
        "81uaFFPew6L._AC_SL1500_.jpg"
      ]
    },
    "LoCo Cookers 2-Burner Digital Series II SmartTemp Flat Top Grill 26": {
      "price": 349.29999999999995,
      "images": [
        "61guoMhzrjL._AC_SL1500_.jpg",
        "61oKn+Is8JL._AC_SL1500_.jpg",
        "61YRlcIob-L._AC_SL1500_.jpg",
        "61ZFSTC5+7L._AC_SL1500_.jpg",
        "71e3khzywaL._AC_SL1500_.jpg",
        "71LaQQ4xZWL._AC_SL1500_.jpg",
        "813zv-J9MVL._AC_SL1500_.jpg",
        "81u3qCpBYFL._AC_SL1500_.jpg",
        "91Lx-D2OvqL._AC_SL1500_.jpg",
        "download.webp"
      ]
    },
    "Intex 68325EP Excursion 5 Person Raft Set": {
      "price": 133,
      "images": [
        "89d374c9-fbac-4217-adcd-e811a1d1f60b_1.c430465af9c1f38d2ee435e23708c6c8.webp",
        "Intex-68325EP-Excursion-5-person-raft-Set_aeadf9cf-30fa-474f-b25c-b56537511a4f.d8c6f1428b05d13d6140791e3b59f4c0.webp"
      ]
    },
    "Intex Corner Sofa L-Shaped Inflatable Home Lounge Couch with Cupholders": {
      "price": 91,
      "images": [
        "51dP4js-ayL._AC_SL1500_.jpg",
        "51Fm-hFU-mL._AC_SL1500_.jpg",
        "6141Xu9x4ZL._AC_SL1500_.jpg",
        "61HXir7wOqL._AC_SL1500_.jpg",
        "61o-RjK2CML._AC_SL1500_.jpg",
        "61soZrAbTrL._AC_SL1500_.jpg",
        "61WZbK2iJQL._AC_SL1500_.jpg",
        "71JiC+0+CrL._AC_SL1500_.jpg"
      ]
    },
    "Baby Trend Ally 35 Infant Car Seat": {
      "price": 167.29999999999998,
      "images": [
        "0.jpg",
        "611p7EdLvnL._SL1500_.jpg",
        "61Fg-GhQl+L._SL1500_.jpg",
        "61hzfztCmpL._SL1500_.jpg",
        "61kTk3a0rQL._SL1500_.jpg",
        "712JiHDnRmL._SL1500_.jpg",
        "713YvJj0V-L._SL1500_.jpg",
        "71e5f6s2g+L._SL1500_.jpg",
        "71K7JhURGiL._SL1500_.jpg"
      ]
    },
    "Radio Flyer 33PZ Kids Classic Style Dual Deck Tricycle with Handlebar Bell Pink": {
      "price": 44.8,
      "images": [
        "71+ssJ48JKL._AC_SL1500_.jpg",
        "71b8+PrbnWL._AC_SL1500_.jpg",
        "71TOGETk+sL._AC_SL1500_.jpg",
        "81F4H19x+lL._AC_SL1500_.jpg",
        "81kTOsoSCWL._AC_SL1500_.jpg",
        "A1uz7LGesqL._AC_SL1500_.jpg"
      ]
    },
    "Blue Wave NT262 UFO Spaceship with Squirt Gun": {
      "price": 18.2,
      "images": [
        "200faf43-d93a-4223-ab4c-231df9ecfb46.5d02a07373fd23083bcbb3e3411e1511.webp",
        "48c8bfb6-5beb-4d25-9844-3f74eb577e82.9c26cde6053922e0cba87e1f11429475.webp",
        "8d409502-8f1d-4442-98a9-e2df3a86e046.497d4549a6700e6de80405eb6e69ea74.webp",
        "Blue-Wave-NT262-UFO-Spaceship-with-Squirt-Gun_18d1ed33-5f33-46db-be00-a1b1d3282d8f.fd3c8812eb199387a416dc1.webp",
        "dffa299e-bb93-4322-bac5-2e218cd67b15.66eef9dc22e7c80f2389329c25953179.webp"
      ]
    },
    "Bestway Flowclear 12 Pool Cover for Above Ground Frame Pools (Cover Only)": {
      "price": 21.7,
      "images": [
        "61d2VSPmtDL._AC_SL1500_.jpg",
        "71cF+j4FzzL._AC_SL1500_.jpg",
        "819sUE+S0KL._AC_SL1500_.jpg",
        "81Ey2hYdz4L._AC_SL1500_.jpg",
        "81s6XxhkOmL._AC_SL1500_.jpg",
        "61+39XtyRUL._AC_SL1500_.jpg",
        "61c8QBqpAHL._AC_SL1500_.jpg",

        "91tKdMd-2BL._AC_SL1500_.jpg"
      ]
    },
    "Intex PureSpa Plus 6 Person Inflatable Round Hot Tub with 170 AirJets Blue": {
      "price": 503.99999999999994,
      "images": [
        "61zkbeIAW5L._AC_SL1500_.jpg",
        "71+LxeWGFOL._AC_SL1500_.jpg",
        "718-SC3iEVL._AC_SL1500_.jpg",
        "71syYwOlgsL._AC_SL1500_.jpg",
        "71uRfnPSbfL._AC_SL1500_.jpg",
        "71Wpl0UZxkL._AC_SL1500_.jpg",
        "71XGlPbPBVL._AC_SL1500_.jpg",
        "71YW2VhLkgL._AC_SL1500_.jpg",
        "81UnIOABQ1L._AC_SL1500_.jpg"
      ]
    },
    "Funsicle 1500 Gallon SkimmerPlus Filter Pump for Above Ground Swimming Pool Gray Adults": {
      "price": 125.99999999999999,
      "images": [
        "3317093d-23c8-43fc-b003-811f4d0988d8.73760ed04f09f4448c5494bf054cb47e.jpeg",
        "4e61cc45-95b8-4ac0-b4ce-667b8c5bcd88.be739e70abb6af5f45ce536493c11a4d.jpeg",
        "a64e11df-843b-4bf6-89d2-393e78268e66.12b58bb7af55f4809e84635b81fd4607.jpeg",
        "b5df11b5-1272-4dc2-9103-afdc404b28cd.fa339c8d7177a0a9e17eda8237b256f8.jpeg",
        "e3b8ec6e-a8e6-4906-bdcf-8e5ad1258fa7.ed088105c73e61c7f36d46c8e14e386b.jpeg",
        "Funsicle-1500-Gallon-SkimmerPlus-Filter-Pump-for-Above-Ground-Swimming-Pool-Gray-Adults_1fc.jpeg"
      ]
    },
    "Baby Trend Sit N Stand Double Stroller 2.0 DLX with Harness Modern Khaki": {
      "price": 627,
      "images": [
        "0.webp",
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
      ]
    }
  }
  public items: any[] = []

}


