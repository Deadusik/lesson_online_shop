import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'TVs' },
            { id: 2, name: 'Phones' },
            { id: 3, name: 'Refigerators' },
            { id: 4, name: 'Laptops' },
        ]
        this._brands = [
            { id: 1, name: 'samsung' },
            { id: 2, name: 'apple' },
            { id: 3, name: 'lenovo' },
            { id: 4, name: 'asus' }
        ]
        this._devices = [
            { id: 1, name: "iPhone 12 pro", price: 1200, rating: 5, img: 'o4OjCNmNeOhvsS1P.jpg' },
            { id: 2, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 3, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 4, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 5, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' }
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
} 