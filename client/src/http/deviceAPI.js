import { $authHost, $host } from "./index"

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device)
    return data
}

export const getDevices = async (typeId, brandId, page, limit = 4) => {
    const { data } = await $host.get('api/device', {
        params: {
            brandId,
            typeId,
            limit,
            page
        }
    })
    return data
}

export const getDeviceById = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}
