import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function createProduct(user) {

    try {
        const response = await axios.post(`http://localhost:3000/users/`, user);
        console.log("response create", response.data)
        return response
    } catch (error) {
        console.error('Error creating users:', error);
        alert('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function fetchUsers() {
    try {
        const response = await axios.get('http://localhost:3000/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

export async function saveUser(user) {

    try {
        const response = await axios.put(`http://localhost:3000/users/${user.id}`, {
            ...user
        });
        return response
    } catch (error) {
        console.error('Error updating user:', error);
        alert('Hubo un error al actualizar el usuario. Por favor, inténtalo de nuevo.');
    }
}

export async function deleteUser(userId) {
    try {
        await axios.delete(`http://localhost:3000/user/${userId}`);
        return true
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('Hubo un error al eliminar el usuario. Por favor, inténtalo de nuevo.');
    }
}