import axios from "axios";
import React from "react";


const Instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})
export default Instance;