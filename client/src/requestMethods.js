import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmQ0OGQzNDk2MzhlZjRlZDFmMGVkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzczNDAzMywiZXhwIjoxNjc3OTkzMjMzfQ.9sfTdOifPx2v9nOy5F_jGsz5W39f0QIev8BlFUeP20Q"


export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});