export const getTree = (items, parentId = null) => {
  return items
    .filter((item) => item.parentId === parentId)
    .reduce(
      (drawTree, item) => [
        ...drawTree,
        {
          ...item,
          child: getTree(items, item.id)
        }
      ],
      []
    )
}