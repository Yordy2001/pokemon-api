const express = require('express')

const pokemons = require('../../../routers/utils/getPokemons')

module.exports = async (req, res)=> {
    await res.send(pokemons[req.params.id])
     
}
