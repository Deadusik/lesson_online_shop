import { $authHost, $host } from "./index"

export const createType = async (name) => {
    const { data } = await $authHost.post('api/type', name)
    return data
}

export const getTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

