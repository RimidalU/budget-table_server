import mongoose from 'mongoose'

const RowSchema = new mongoose.Schema({
    parentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Row',
        require: true,
        default: null,
    },
    equipmentCosts: {
        type: Number,
        require: true,
        default: 0,
    },
    estimatedProfit: {
        type: Number,
        require: true,
        default: 0,
    },
    machineOperatorSalary: {
        type: Number,
        require: true,
        default: 0,
    },
    mainCosts: {
        type: Number,
        require: true,
        default: 0,
    },
    materials: {
        type: Number,
        require: true,
        default: 0,
    },
    mimExploitation: {
        type: Number,
        require: true,
        default: 0,
    },
    overheads: {
        type: Number,
        require: true,
        default: 0,
    },
    rowName: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        require: true,
        default: 0,
    },
    supportCosts: {
        type: Number,
        require: true,
        default: 0,
    },
    total: {
        type: Number,
        require: true,
        default: 0,
    },
},
    {
        timestamps: true
    })

export default mongoose.model('Row', RowSchema)