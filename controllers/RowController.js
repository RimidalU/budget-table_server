import RowModel from '../models/Row.js'

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

// export const getOne = async (req, res) => {
//     try {
//         const postId = req.params.id

//         PostModel.findOneAndUpdate({
//             _id: postId
//         }, {
//             $inc: { viewsCount: 1 },  //increase view counter
//         }, {
//             returnDocument: 'after'
//         },
//             (error, data) => {
//                 if (error) {
//                     return res.status(500).json({
//                         success: false,
//                         message: `Failed to get the post`,
//                         error
//                     })
//                 }

//                 if (!data) {
//                     return res.status(404).json({
//                         success: false,
//                         message: `The post not found`
//                     })
//                 }

//                 res.status(200).json(data)
//             }
//         )
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: `Failed to get the post`,
//             error
//         })
//     }
// }

// export const remove = async (req, res) => {
//     try {
//         const rowId = req.params.id

//         const er = await RowModel.findOneAndDelete({
//             _id: rowId,
//         })
// console.log(er)

//         await RowModel.findOneAndDelete({
//             _id: rowId,
//         },
//             (error, data) => {

//                 if (error) {
//                     return res.status(500).json({
//                         success: false,
//                         message: 'Failed to remove the row.',
//                         error
//                     })
//                 }

//                 if (!data) {
//                     return res.status(404).json({
//                         success: false,
//                         message: 'The row not found.'
//                     })
//                 }

//                 res.status(200).json({
//                     success: true,
//                 })
//             })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to remove row.',
//             error
//         })
//     }
// }

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

        res.status(200).json(rows)
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