import axios from "axios";


const BASE_URL="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQ2NGIwNjg4ZThlYjg4Y2I4NTgwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Njc5MTM2MCwiZXhwIjoxNjk3MDUwNTYwfQ.KMy_rmdteHLsPomNut2Fs9TFEyoO5ku64CTObejiwpY"


export const publicRequest= axios.create({
    baseURL:BASE_URL
})

export const iserRequest= axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})