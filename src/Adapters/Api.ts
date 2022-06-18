import config from "./Global";

const Api = {
    post: (route: any, data: any, conf: any) => {
        console.log("data", data);
        return config.axiosHandle().post(`${route}`, data, conf);
    },
    delete: (route: any, conf: any) => {
        return config.axiosHandle().delete(`${route}`, conf);
    },
    get: (route: any, dataCom: string = "", conf: any) => {
        let data = dataCom;
        const qs = "?" + Object.keys(data)
            .map(
                (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[+key])}`
            )
            .join("&");
        return config.axiosHandle().get(`${route}${dataCom !== '' ? qs : ''}`, data, conf);
    },
}

export default Api