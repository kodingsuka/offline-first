import {Schema} from 'mongoose'

export const NoteSchema = new Schema({
    description: String,
    category: {
        type: String,
        enum: ['income', 'expense'],
        default: 'expense'
    },
    date: {
        type: Date,
        required: true,
    },
    nominal: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: null
    }
})