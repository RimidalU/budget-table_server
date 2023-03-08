import mongoose from 'mongoose'

const RowSchema = new mongoose.Schema({
    equipmentCosts: {
        type: Number,
        require: true,
    },
    estimatedProfit: {
        type: Number,
        require: true,
    },
    id: {
        type: Number,
        require: true,
        unique: true,
    },
    machineOperatorSalary: {
        type: Number,
        require: true,
    },
    mainCosts: {
        type: Number,
        require: true,
    },
    materials: {
        type: Number,
        require: true,
    },
    mimExploitation: {
        type: Number,
        require: true,
    },
    overheads: {
        type: Number,
        require: true,
    },
    rowName: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        require: true,
    },
    supportCosts: {
        type: Number,
        require: true,
    },
    total: {
        type: Number,
        require: true,
    },
},
    {
        timestamps: true
    })

export default mongoose.model('Row', RowSchema)