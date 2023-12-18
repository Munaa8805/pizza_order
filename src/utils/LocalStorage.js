export function getLocalStorage(data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("pizzaUser", JSON.stringify(data.data));
}
