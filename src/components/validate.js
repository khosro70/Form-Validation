const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is not valid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 charactor or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username is required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password don't match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  return errors;
};

export { validate };
