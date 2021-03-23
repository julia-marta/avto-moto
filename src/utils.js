
export const validateFields = (username, comment) => {
  return {
    username: username.length === 0,
    comment: comment.length === 0,
  };
};
