
function isUserLoggedIn() {
    return !!localStorage.getItem('token')
}


export {
    isUserLoggedIn,
}