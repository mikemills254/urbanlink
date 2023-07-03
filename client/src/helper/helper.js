import axios from 'axios'
axios.defaults.baseURL = "process.env.REACT_APP_SERVER_DOMAIN"
console.log(axios.defaults.baseURL)
export async function authenticate(email){
    try {
        return await axios.post('/api/authenticate', { email })
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

        if(status === 201){
            await axios.post('/api/registerMail', { Useremail: email, password})
        }
        return Promise.resolve({ msg })
    } catch (error) {
        return { error: "Unable to register the user "}
    }
}

export async function verifyPassword({ email, password}) {
    try {
        if(email){
            const data = await axios.post('/api/login',  { email, password })
            return Promise.resolve({ data })
        }
    } catch (error) {
        return Promise.reject({ error: "Password does not match "})
    }
}

export async function updateUser(response) {
    try {
        const token = await localStorage.getItem('token')
        const data = await axios.put('/api/updateUser', response, {headers: { "Authorixation": `Bearer ${token}` }})

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error: "Unable to update User" })
    }
}

export async function GenerateOTP(username){
    try {
        const { data: {code}, status } = await axios.get('/api/generateOTP', { params: {username}})
        if(status === 201){
            let {data: {email}} = await getUser({ username})
            let text = `Your password recovery OTP is ${code}. Verify and recover your password}`
            await axios.post('/api/registerMail', {username, userEmail: email, text, subject: "Password recovery"})

            return Promise.resolve(code)
        }
    } catch (error) {
        return Promise.reject({ error })
    }
}
export async function verifyOTP(email, code){
    try {
        const {data, status} = await axios.get('/api/verifyOtp', {params: {email, code}})
        return {data,status}
    } catch (error) {
        return Promise.reject({error})
    }
}

export async function resetPassword({userEmail: email, password}){
    try {
        const {data, status} = await axios.put('/api/resetPassword', {email, password})
        return Promise.resolve({ data, status })
    } catch (error) {
        return Promise.reject({error})
    }
}