const express = require('express')
const app = express()

app.set('PORT',process.env.PORT || 3000)

app.route('/')
    .get((req,res) => {
        res.json({message: 'server running'})
    })

app.route('/get-user')
    .get((req,res) => {
        res.json({
            user: {
                name: 'Gustavo',
                lastname: 'Bethelmy'
            }
        })
    })

app.route('/posts/:id')
    .get((req,res) => {
        const {id} = req.params
        res.json({
            message: `This is my id: ${id}`
        })
    })

app.listen(app.get('PORT'),err => {
    if (err){
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening on port ${app.get('PORT')}`)
})