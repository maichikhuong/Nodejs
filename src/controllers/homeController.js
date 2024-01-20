const connection = require('../config/database')
const { getAllUsers, getUpdateUsers, UpdateUsers, DeleteUsers } = require('../services/CURDService')

const getHomepage = async (req, res) => {
    // // process data
    // // call model
    // let user = [];
    // connection.query(
    //     'select * from mysql_database.Users',
    //     function (err, results, fields) {
    //         user = results;
    //         console.log("Result = ", results);
    //         // console.log("Fields = ", fields);
    //         console.log('Check user: ', user)
    //         res.send(JSON.stringify(user))
    //     }
    // )
    let rows = await getAllUsers()
    return res.render('home.ejs', { listUsers: rows })
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const checkHTML = (req, res) => {
    // res.send('<h1>Check the html</h1>')
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    // let { email, myname, address } = req.body
    let email = req.body.email
    let myname = req.body.myname
    let address = req.body.address
    console.log("Check input: ", req.body)



    // Using placeholders
    let [rows, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, myname, address],
    );

    console.log(rows)
    res.send('Create a new users success !')


}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUpdateUsers(userId)
    res.render('edit.ejs', {userEdit: user})
}

const postUpdateUser = async (req, res) => {

    // let { email, myname, address } = req.body
    let email = req.body.email
    let myname = req.body.myname
    let address = req.body.address
    let userId = req.body.userId

    await UpdateUsers(email, myname, address, userId)

    // res.send('Update user done !')
    res.redirect('/')


}

const postDeleteUser = async (req, res) =>{
    const userId = req.params.id
    let user = await getUpdateUsers(userId)
    res.render("delete.ejs", {userEdit: user})
}

const postConfirmDeleteUser = async (req, res) => {
    let userId = req.body.userId

    await DeleteUsers(userId)

    // res.send('Delete user done !')
    res.redirect('/')

}

module.exports = {
    getHomepage, getABC, checkHTML, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postConfirmDeleteUser
}