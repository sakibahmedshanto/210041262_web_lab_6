const express = require('express');
const addUser = require('../controllers/addUserController');
const getUsers = require('../controllers/getUsersController');
const updateUser = require('../controllers/updateUserController');
const deleteUser = require('../controllers/deleteUserController');
const getUserByEmail = require('../controllers/getUserByEmail');

const router = express.Router();

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:email', getUserByEmail);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);


module.exports = router;
