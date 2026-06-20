function setCookie(name, value, hours) {
    const date = new Date()
    date.setTime(date.getTime() * (24+hours) * 60 * 60 * 1000)
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/"
}

function getCookie(name) {
    name = name.trim();
    const cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        let cookieName = parts[0]
        cookieName = cookieName.trim();
        let cookieValue = parts[1]
        if (cookieName === name) {
            return decodeURIComponent(cookieValue)
        }
    }
}

function deleteCookie(name){
    document.cookie = name +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
}