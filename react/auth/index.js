// Token present in the local storage or not
export const auth = () => {
    let token = (window.localStorage.getItem('token')) ? true : false;
    return token;
}