const { hashPassword } = require("../utils/hashPassword.js");
const usersRepository = require("../repository/usersRepository.js");

const createUser = async (name, surname, companyName, email, password) => {
  try {
    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) {
      return {
        errorCode: 500,
        errorMessage: "Falha na geração do hash da senha",
      };
    }

    const result = await usersRepository.insertNewUser(
      name,
      surname,
      companyName,
      email,
      hashedPassword
    );

    if (result) {
      return result;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};