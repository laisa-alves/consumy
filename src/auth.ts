import { storage } from "./storage"

async function signIn(email, password, onSuccess) {
    console.log("Will sign in...")
    const body = {
        login: {
            email: email,
            password: password
        }
    }

    const response = await fetch("http://127.0.0.1:3000/sign_in", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    response.json().then((json) => {
        storage.store('token', json.token)
        storage.store('email', json.email)
        onSuccess()
    })
}

function loggedIn() {
    return Boolean(storage.get('token'))
}

function currentUser() {
    if(!loggedIn()) {
        return null
    }
    return {
        email: storage.get('email')
    }
}

function signOut(andThen = null) {
    storage.remove('token')
    storage.remove('email')

    if(typeof(andThen) == 'function') {
        andThen()
    }
}

export const auth = {
    signIn,
    loggedIn,
    currentUser,
    signOut
}