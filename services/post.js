const read = async (body) => {
  try {
    const response = "Its working";

    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  read,
};
