const useLogin = () => {

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const user = { email, password };

    return [user];
};

export default useLogin;