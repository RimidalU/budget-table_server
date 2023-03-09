import RowModel from '../models/Row.js'
import { getTree } from '../helpers/getTree.js'
import { getRow } from '../helpers/getRow.js'

export const create = async (req, res) => {
    try {
        const {
            equipmentCosts, estimatedProfit, machineOperatorSalary, mainCosts, materials,
            mimExploitation, overheads, rowName, salary, supportCosts, total, parentId
        } = req.body
        const newRow = new RowModel({
            parentId,
            equipmentCosts,
            estimatedProfit,
            machineOperatorSalary,
            mainCosts,
            materials,
            mimExploitation,
            overheads,
            rowName,
            salary,
            supportCosts,
            total,
        })

        const row = await newRow.save()
        res.status(200).json(row)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to create row.`,
            error
        })
    }
}

export const update = async (req, res) => {
    try {
        const rowId = req.params.id
        const {
            equipmentCosts, estimatedProfit, machineOperatorSalary, mainCosts, materials,
            mimExploitation, overheads, rowName, salary, supportCosts, total, parentId
        } = req.body


        const row = await RowModel.findOneAndUpdate({
            _id: rowId,
        },
            {
                equipmentCosts,
                estimatedProfit,
                machineOperatorSalary,
                mainCosts,
                materials,
                mimExploitation,
                overheads,
                rowName,
                salary,
                supportCosts,
                total,
            })

        if (!row) {
            return res.status(404).json({
                success: false,
                message: 'The row not found.'
            })
        }
        res.status(200).json({
            success: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update row.',
            error
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const rows = await RowModel.find()

        const neatRow = rows.map(getRow)
        const treeRows = getTree(neatRow)
        res.status(200).json(treeRows)

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to get rows.`,
            error
        })
    }
}

export const remove = async (req, res) => {
    try {
        const rowId = req.params.id
        const row = await RowModel.findOneAndDelete({
            _id: rowId,
        })
        if (!row) {
            return res.status(404).json({
                success: false,
                message: 'The row not found.'
            })
        }
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove row.',
            error
        })
    }
}