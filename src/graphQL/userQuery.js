const createGetQuery = (userId) => {
    const users = `users (ids: [${userId}])`;
    const columns = `id name email phone mobile_phone`;

    return `query {${users}{${columns}}}`;
};

const createGetAllQuery = () => {
    const users = `users`;
    const columns = `id name email`;

    return `query {${users}{${columns}}}`;
};

module.exports = {createGetQuery, createGetAllQuery};