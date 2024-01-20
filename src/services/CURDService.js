const connection = require('../config/database')

const getAllUsers = async () => {
    let [rows, fields] = await connection.query(`select * from Users`)
    return rows
}

const getUpdateUsers = async (userId) => {
    let [rows, fields] = await connection.query('select * from Users where id = ?', [userId])
    let user = rows && rows.length > 0 ? rows[0] : {}
    return user
}

const UpdateUsers = async (email, myname, address, userId) => {
    // Using placeholders
    let [rows, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ? , city = ? WHERE id = ?`, [email, myname, address, userId],
    );
    
}

const DeleteUsers = async (userId) => {
    let [rows, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userId],
    );
}

module.exports = {
    getAllUsers, getUpdateUsers, UpdateUsers, DeleteUsers
}