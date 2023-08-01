const UserModel = require("../models/model");
const bcrypt = require("bcrypt"); // Use to hash the password
const jwt = require("jsonwebtoken");

// Here we will we pass the registration data which will store in mpongoDB schema
const userRegistration = async (req, res) => {
  const { name, email, password } = req.body; //req.body means someone sending some data from frontend through form

  const user = await UserModel.findOne({ email: email });

  if (user) {
    res.send({ status: "failed", message: "Email already exists" });
  } else {
    if (name && email && password) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const collect = new UserModel({
            name: name,
            email: email,
            password: hashPassword,
          });

          await collect.save();

          const saved_user = await UserModel.findOne({ email: email });

          //Generate JWT token
          const token = jwt.sign(
            { userID: saved_user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );

          res.send({
            status: "success",
            message: "registration Successful",
            token: token,
          });
        } catch (err) {
          console.log(err);
          res.send({ status: "failed", message: "Unable to register" });
        }

    } else {
      res.send({ status: "failed", message: "All field are required" });
    }
  }
};

const  userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserModel.findOne({ email: email });

      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (email === user.email && isMatch) {
          //Generatejwt token
          const token = await jwt.sign(
            { UserID: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );
         res.cookie("jwtToken", token, {
            expires:  new Date(Date.now()+25892000000),
            secure: false,
            httpOnly: true, 
          });
          res.send({
            status: "success",
            message: "Login Success",
            token: token,
          });
        } else {
          res.send({
            status: "failed",
            message: "Email or password is incorrect",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "This email is not registered with us",
        });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  } catch (err) {
    console.log(err);
    res.send({ status: "failed", message: "Unable to Login" });
  }
};

const loggedUser = async (req, res) => {
  res.send({ user: req.user });
};

module.exports = {
  userRegistration,
  userLogin,
  loggedUser,
};
