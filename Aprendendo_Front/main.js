const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)

    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url,newUser)
    .then(response => {

    })
    .catch(error => console.error(error))
}

const newUser =  {
    name:"Juliana",
    avatar: "https://picsum.photos/200/300",
    city: "Cariacica"
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then( response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))

}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`,userUpdated)
    .then( response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Ana",
    city: "São Paulo",
    avatar: "https://picsum.photos/200/300"
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then()
    .catch(error => console.error(error))
}

getUsers()
//deleteUser(2)
//addNewUser(newUser)
//updateUser(2,userUpdated)
//getUser(2)