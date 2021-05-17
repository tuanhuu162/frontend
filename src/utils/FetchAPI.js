import axios from "axios";
import {notification} from "antd";
import {stringify} from "querystring";

export const FetchAPI = async (path, method, header, body) => {
    const default_header = {
        "Content-Type": "application/json"
    }
    if (typeof header === "object"){
        Object.assign(default_header, header)
    }
    try {
        return await axios({
            url: process.env[`REACT_APP_BACKEND_${(process.env["NODE_ENV"] === "production"? "PROD": "DEV")}`] + path,
            method,
            headers: default_header,
            data: body 
        })
    } catch (error){
        return error.response

    }
}

export const get = (path, query = {}, header = {}) => FetchAPI(`${path}?${stringify(query)}`, "GET", header);
export const post = (path, header, body) => FetchAPI(path, "POST", header, body);
export const put = (path, header, body) => FetchAPI(path, "PUT", header, body);
export const destroy = (path, header, body) => FetchAPI(path, "DELETE", header, body);