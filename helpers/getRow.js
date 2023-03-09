export const getRow = (row) => {
    const {
        equipmentCosts, estimatedProfit, machineOperatorSalary, mainCosts, materials,
        mimExploitation, overheads, rowName, salary, supportCosts, total, parentId, _id
    } = row
    return {
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
        parentId: parentId === null ? null : parentId.toString(),
        id: _id.toString(),
    }
}