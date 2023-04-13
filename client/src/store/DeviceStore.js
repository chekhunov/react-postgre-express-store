import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Koko" },
      { id: 2, name: "Moko" },
    ];
    this._brands = [
      { id: 1, name: "Sony" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "i 12",
        price: 25000,
        rating: 5,
        img: "https://klike.net/uploads/posts/2020-07/1594278030_1.jpg",
      },
      {
        id: 2,
        name: "i 12 pro max",
        price: 30000,
        rating: 5,
        img: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614577839_33-p-foto-telefona-na-belom-fone-40.png",
      },
      {
        id: 3,
        name: "14 pro max",
        price: 60000,
        rating: 5,
        img: "https://ae01.alicdn.com/kf/Sc95e4adaf4b448b0a606dc07f0f52b02r/Angel-Care-celular-smartphone-android-128GB-Smart-Phones-Mini-Cell-Phone-Global-Version-celular-barato-com.jpg_640x640.jpg",
      },
      {
        id: 4,
        name: "18 pro max",
        price: 100000,
        rating: 5,
        img: "https://ae01.alicdn.com/kf/Sbba8799271254e59a7ef47e2e62ae98at/Angel-Care-celular-smartphone-android-128GB-Smart-Phones-Mini-Cell-Phone-Global-Version-celular-barato-com.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  //actions
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  //getters
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
