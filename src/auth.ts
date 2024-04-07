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
    response.json().then((json) => onSuccess())
}

export const auth = {
    signIn: signIn
}