import { createProduct,fetchUsers, saveUser, deleteUser } from "../services/api.js";
let showItems = document.getElementById("Suscriptores") 

window.displayUsers=async function displayUsers(){
    const html = ""
    showItems.innerHTML=""
    
    const users = await fetchUsers()
    users.forEach(user=>{
        showItems.innerHTML+=`
        <tr>
        <td>${user.name} </td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td><img src="${user.image} " alt=""></td>
        <td><button type="button" class="buttonsend" onclick="editUser(${user.id} )">Edit</button></td>
        <td><button type="button" class="buttonsend" onclick="DeleteUser(${user.id} )">Delete</button></td>
        </tr>
        `
    })
}
displayUsers()