import { storage } from './storage'

function success(response: Response, onSuccess: () => void) {
  response.json().then((json) => {
    storage.store('token', json.token)
    storage.store('email', json.email)
    onSuccess()
  })
}

function failure(response: Response, onFailure: () => void) {
  onFailure()
}

function loggedIn() {
  return Boolean(storage.get('token'))
}

function signOut(andThen = () => {}) {
  storage.remove('token')
  storage.remove('email')

  andThen()
}

function currentUser() {
  if (!loggedIn()) {
    return null
  }
  return {
    email: storage.get('email')
  }
}

async function signIn(
  email: string,
  password: string,
  onSuccess: () => void,
  onFailure: () => void
) {
  const body = {
    login: {
      email: email,
      password: password
    }
  }

  const response = await fetch('http://127.0.0.1:3000/sign_in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (response.ok) {
      success(response, onSuccess)
    } else {
      failure(response, onFailure)
    }
  })
}

export const auth = {
  signIn,
  loggedIn,
  currentUser,
  signOut
}
