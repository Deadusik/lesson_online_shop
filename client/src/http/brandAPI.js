import { $authHost, $host } from "./index"

export const createBrand = async (name) => {
    const { data } = await $authHost.post('api/brand', name)
    return data
}

export const getBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

