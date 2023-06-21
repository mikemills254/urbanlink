import axios from 'axios'

export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate', { username })
    } catch (error) {
        return { error: "Username does not exist...!"}
    }
}

export async function getUser({username}){
    try {
        const { data} = await axios.get(`/api/user/${username}`)
        return { data }
    } catch (error) {
        return { error: "Password does not match" }
    }
}

export async function registerUser(credentials){
    try {
        const { data : {msg}, status } = await axios.post(`/api/register`, credentials)
        const { email, password } = credentials
    } catch (error) {
        return { error: "Unable to register the user "}
    }
}