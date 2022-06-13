const { Router } = require('express')
const router = Router()
const request = require('request')


router.get('/', (req,res) => {

    request(`https://pokeapi.co/api/v2/pokemon/?limit=500`, (err, response, body)=> {
        try {
            if(!err){
                const pokemones = JSON.parse(body)
                
                res.render('home', pokemones)
            }
        } catch (err) {
            res.render("NPokemon")
        }
    })
    
})





module.exports = router