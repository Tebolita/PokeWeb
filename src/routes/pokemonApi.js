const { Router } = require('express')
const router = Router()
const request = require('request')




router.post('/buscarPoke', (req, res) => {
    const pokemon = req.body.pokemon

    // Encontrar al pokemon con la api
    request(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (err, response, body) => {
        try {
            if (!err) {
                const bPokemon = JSON.parse(body)
                request(`https://pokeapi.co/api/v2/pokemon-species/${bPokemon.id}`, (err, response, body) => {
                    const pokemonEspecie = JSON.parse(body)
                    
                    res.render('BPokemon', { bPokemon, pokemonEspecie })
                })

            }
        } catch (error) {
            res.render('NPokemon')
        }

    })
})

router.get('/buscarPokeId/:pokeName', (req, res) => {
    const pokemon = req.params.pokeName

    // Encontrar al pokemon con la api
    request(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (err, response, body) => {
        try {
            if (!err) {
                const bPokemon = JSON.parse(body)
                request(`https://pokeapi.co/api/v2/pokemon-species/${bPokemon.id}`, (err, response, body) => {
                    const pokemonEspecie = JSON.parse(body)
                    
                    res.render('BPokemon', { bPokemon, pokemonEspecie })
                })

            }
        } catch (error) {
            res.render('NPokemon')
        }

    })
})


module.exports = router