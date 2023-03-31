import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const res = await $host.post('api/user/login', { email, password })
    return res
}

export const check = async () => {
    const res = await $host.post('api/auth/registration')
    return res
} 