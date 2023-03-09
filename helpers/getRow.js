export const getRow = (row, full = null) => {
    const {
        equipmentCosts, estimatedProfit, machineOperatorSalary, mainCosts, materials,
        mimExploitation, overheads, rowName, salary, supportCosts, total, parentId, _id
    } = row

    const neatRow = {
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
        id: _id.toString(),
    }
    if (!full) {
        return neatRow
    }
    return {
        ...neatRow,
        parentId: parentId === null ? null : parentId.toString(),
    }
}

