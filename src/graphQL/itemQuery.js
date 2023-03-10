const createGetQuery = (boardId, itemsIdArr) => {
    const board = `boards (ids: ${boardId})`;
    const items = `items (ids: ${itemsIdArr})`;
    const columns = `name column_values {id, value, text}`;

    return `query {${board}{${items}{${columns}}}}`;
};

const createMutationQuery = (boardId, pulseId, columnObj) => {
    const {name, value} = columnObj;
    const changeColumnVal = `change_column_value (
      board_id: ${boardId},
      item_id: ${pulseId},
      column_id: ${name},
      value: ${value}
    )`;
    const returnVals = `id`;
    return `mutation {${changeColumnVal}{${returnVals}}}`;
}

const createQuery = (boardId, groupId, columnVals) => {
    const {name} = columnVals;
    let strVals = JSON.stringify(columnVals);

    const changeColumnVal = `create_item (
      board_id: ${boardId},
      group_id: "${groupId}",
      item_name: ${name ? name : ''},
      column_values: ${JSON.stringify(strVals)}
    )`;
    const returnVals = `id`;
    return `mutation {${changeColumnVal}{${returnVals}}}`;
}

const columnQuery = (boardId, coumnId, columnVal) => {
  const boardQuery = `items_by_column_values (board_id: ${boardId}, column_id: "${coumnId}", column_value: "${columnVal}")`;
  const columns = `id column_values {id, value, text}`;

  return `query {${boardQuery}{${columns}}}`;
}

module.exports = {createGetQuery, createMutationQuery, createQuery, columnQuery};