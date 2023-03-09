import { body } from 'express-validator'

export const rowCreateValidation = [
  body('equipmentCosts', 'Enter the number').isNumeric(),
  body('estimatedProfit', 'Enter the number').isNumeric(),
  body('machineOperatorSalary', 'Enter the number').isNumeric(),
  body('mainCosts', 'Enter the number').isNumeric(),
  body('materials', 'Enter the number').isNumeric(),
  body('mimExploitation', 'Enter the number').isNumeric(),
  body('overheads', 'Enter the number').isNumeric(),
  body('parentId', 'Invalid parent ID').isString().optional({ nullable: true }),
  body('rowName', 'Enter the corrent name').isString(),
  body('salary', 'Enter the number').isNumeric(),
  body('total', 'Enter the number').isNumeric(),
]

export const rowUpdateValidation = [
  body('equipmentCosts', 'Enter the number').isNumeric(),
  body('estimatedProfit', 'Enter the number').isNumeric(),
  body('machineOperatorSalary', 'Enter the number').isNumeric(),
  body('mainCosts', 'Enter the number').isNumeric(),
  body('materials', 'Enter the number').isNumeric(),
  body('mimExploitation', 'Enter the number').isNumeric(),
  body('overheads', 'Enter the number').isNumeric(),
  body('rowName', 'Enter the corrent name').isString(),
  body('salary', 'Enter the number').isNumeric(),
  body('total', 'Enter the number').isNumeric(),
]