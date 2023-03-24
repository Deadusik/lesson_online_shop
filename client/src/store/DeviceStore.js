import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'TV' },
            { id: 2, name: 'phone' }
        ]
        this._brands = [
            { id: 1, name: 'samsung' },
            { id: 2, name: 'apple' }
        ]
        this._devices = [
            { id: 1, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 2, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 3, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 4, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' },
            { id: 5, name: "iPhone 12 pro", price: 1200, rating: 5, img: '' }
        ]

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

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
} 