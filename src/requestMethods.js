import axios from "axios";


const BASE_URL="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQ2NGIwNjg4ZThlYjg4Y2I4NTgwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzA5NDc1MSwiZXhwIjoxNjk3MzUzOTUxfQ.SquFvroVFRxg6T4BO11Uf9g5k0UX5-Cz0gSvpagaTYM"


export const publicRequest= axios.create({
    baseURL:BASE_URL
})

export const iserRequest= axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})