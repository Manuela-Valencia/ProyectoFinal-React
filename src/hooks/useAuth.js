import axios from "axios";

const useAuth = () => {
    // CREATE USER => post api
    const createUser = (url, data) => {
        axios
            .post(url, data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    const loginUser = (url, data) => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    };

    return { createUser, loginUser };
};

export default useAuth;