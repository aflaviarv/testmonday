const createGetQuery = (boardId, groupIds) => {
    const board = `boards (ids: ${boardId})`;
    const groups = `groups (ids: [${groupIds}])`;
    const items = `id items`;
    const columns = `id name column_values {id, value, text}`;

    return `query {${board}{${groups}{${items}{${columns}}}}}`;
};

module.exports = {createGetQuery};