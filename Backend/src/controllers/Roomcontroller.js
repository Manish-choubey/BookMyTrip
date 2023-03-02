const Room = require("../model/RoomModel")



// get all
let getAll =async (req, res) => {
    const type = req.query.type

    let rooms
    try {
        if (type) {
            rooms = await Room.find({ type: type }).limit(15)
            console.log(rooms)
        } else {
            rooms = await Room.find({}).limit(15)
        }
        return res.status(200).json(rooms)
    } catch (error) {
        console.error(error.message)
    }
}

// get types and their corresponding numbers
let gettype = async (req, res) => {
    try {
        const apartment = await Room.find({ type: 'apartment' }).countDocuments()
        const villa = await Room.find({ type: 'villa' }).countDocuments()
        const penthouse = await Room.find({ type: 'penthouse' }).countDocuments()
        const bungalow = await Room.find({ type: 'bungalow' }).countDocuments()

        return res.status(200).json({ apartment, villa, penthouse, bungalow })
    } catch (error) {
        console.error(error.message)
    }
}

// get 
let getById= async (req, res) => {
    const id = req.params.id
    try {
        const rooms = await Room.findById(id)
        return res.status(200).json(rooms)
    } catch (error) {
        console.error(error.message)
    }
}

// create
let createRoom = async (req, res) => {
    try {
        const createdRoom = await Room.create(req.body)
        return res.status(201).json(createdRoom)
    } catch (error) {
        console.error(error.message)
    }
}

// update
let updateroom =async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json(room)
    } catch (error) {
        console.error(error.message)
    }
}

// delete
let deleteRoom =async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        return res.status(200).json({ msg: 'Room has been deleted successfully' })
    } catch (error) {
        console.error(error.message)
    }
}

// book hotel 
let bookHotel =async (req, res) => {
    try {
        const { unavailableDates } = req.body
        const room = await Room.findByIdAndUpdate(req.params.id)

        room.unavailableDates = room.unavailableDates.concat(unavailableDates)
        await room.save()

        return res.status(200).json(room)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports.getAll= getAll
module.exports.gettype= gettype
module.exports.getById=getById
module.exports.createRoom=createRoom
module.exports.updateroom=updateroom
module.exports.deleteRoom=deleteRoom
module.exports.bookHotel= bookHotel