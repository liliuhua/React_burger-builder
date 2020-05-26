import axios from 'axios';

const instance = axios.create({
    //send your request to store your data in the database of firebase
    baseURL:'https://react-my-burger-6710a.firebaseio.com/'
});

export default instance;
