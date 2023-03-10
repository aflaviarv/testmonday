const createProjectQuery = (userId, boardId, text) => {
    const query = `create_notification (
      user_id: ${userId},
      target_id: ${boardId},
      text: ${text},
      target_type: Project)`;
    return `mutation {${query}{text}}`
}

module.exports = {createProjectQuery};