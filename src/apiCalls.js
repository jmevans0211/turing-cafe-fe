export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => {
    if (!response.ok) {
        throw Error('error')
    }
    return response.json()
    })
}

export const postReservation = reservation => {
  const options = {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('http://localhost:3001/api/v1/reservations', options)
  .then(response => response.json())
}

// export const delete = parameter => {
//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//   return fetch(`http://localhost:3001/api/v1/ideas/${parameter}`, options)
//   .then(() => fetch('http://localhost:3001/api/'))
//   .then(response => response.json())
// }