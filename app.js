const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const bcrypt = require("bcryptjs");


const jwt = require("jsonwebtoken");
const JWT_SECRET = "16[4p$WiGpJ@Hm4b#7rJB_ducVO)gqDa?DrS+zErGK=nTS12C7qd%HQZfGv&wL-EJ0a";


const mongoUrl = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/";

mongoose
    .connect(mongoUrl, { useNewUrlParser: true })
    .then(() => { console.log("Connected to database"); })
    .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");


app.post("/register", async(req, res) => {
    
    const { firstName, lastName, email, password } = req.body;
    
    const encryptedPassword = await bcrypt.hash(password, 10);
    
    try {
        const oldUser = await User.findOne({ email })
        
        if (oldUser) {
            return res.json({ error: 'User already exists!'});
        }
        
        await User.create({
            firstName,
            lastName,
            email,
            password: encryptedPassword
        });
        
        res.send({status:"ok"});
    }
    
    catch (error) {
        res.send({status:"error"});
    }
});


app.post("/login-user", async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
        return res.json({error: "User Not Found!"});
    }
    
    if (await bcrypt.compare(password, user.password)) {
        
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        
        // 20 means the request have been successful, and also will pass the token
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        }
        else {
            return res.json({ status: "error" });
        }
    }

    res.json ({ status: "error", error: "Invalid Password!" });
});


app.post("/userData", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const userEmail = user.email;

    User.findOne({ email: userEmail })

      .then((data) => {
        res.send({ status: "ok", data: data });
      })

      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  }
  
  catch (error) {}
});


app.listen(5000, () => {
    console.log("Server Started");
})

// const express = require("express");
// const app = express();
// const https = require("https");
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

// const bcrypt = require("bcryptjs");
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));

// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");
// const JWT_SECRET = "16[4p$WiGpJ@Hm4b#7rJB_ducVO)gqDa?DrS+zErGK=nTS12C7qd%HQZfGv&wL-EJ0a";

// const mongoUrl = "mongodb+srv://User:Zy_252811002050810@gettingstarted.wsalowo.mongodb.net/";

// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// require("./userDetails");

// const User = mongoose.model("UserInfo");

// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
//   });
  

// app.post("/register", async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   const encryptedPassword = await bcrypt.hash(password, 10);

//   try {
//     const oldUser = await User.findOne({ email });

//     if (oldUser) {
//       return res.json({ error: "User already exists!" });
//     }

//     await User.create({
//       firstName,
//       lastName,
//       email,
//       password: encryptedPassword,
//     });

//     res.send({ status: "ok" });
//   } catch (error) {
//     res.send({ status: "error" });
//   }
// });

// app.post("/login-user", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.json({ error: "User Not Found!" });
//   }

//   if (await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({ email: user.email }, JWT_SECRET);

//     if (res.status(201)) {
//       return res.json({ status: "ok", data: token });
//     } else {
//       return res.json({ status: "error" });
//     }
//   }

//   res.json({ status: "error", error: "Invalid Password!" });
// });

// app.post("/userData", async (req, res) => {
//   const { token } = req.body;

//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     console.log(user);

//     const userEmail = user.email;

//     User.findOne({ email: userEmail })
//       .then((data) => {
//         res.send({ status: "ok", data: data });
//       })
//       .catch((error) => {
//         res.send({ status: "error", data: error });
//       });
//   } catch (error) {}
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });

// app.post("/forgot-password", async (req, res) => {
//     const { email } = req.body;
//     try {
//       const oldUser = await User.findOne({ email });
//       if (!oldUser) {
//         return res.json({ status: "User Not Exists!!" });
//       }
//       const secret = JWT_SECRET + oldUser.password;
//       const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
//         expiresIn: "5m",
//       });
//       const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
//       var transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "solarxx2407@gmail.com",
//           pass: "voravxiubuvgvybm",
//         },
//       });
  
//       var mailOptions = {
//         from: "solarxx2407@gmail.com",
//         to: "thedebugarena@gmail.com",
//         subject: "Password Reset",
//         text: link,
//       };
  
//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Email sent: " + info.response);
//         }
//       });
//       console.log(link);
//     } catch (error) { }
//   });
  
//   app.get("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     console.log(req.params);
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//       const verify = jwt.verify(token, secret);
//       res.render("index", { email: verify.email, status: "Not Verified" });
//     } catch (error) {
//       console.log(error);
//       res.send("Not Verified");
//     }
//   });
  
//   app.post("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     const { password } = req.body;
  
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//       const verify = jwt.verify(token, secret);
//       const encryptedPassword = await bcrypt.hash(password, 10);
//       await User.updateOne(
//         {
//           _id: id,
//         },
//         {
//           $set: {
//             password: encryptedPassword,
//           },
//         }
//       );
  
//       res.render("index", { email: verify.email, status: "verified" });
//     } catch (error) {
//       console.log(error);
//       res.json({ status: "Something Went Wrong" });
//     }
//   });

// app.get("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     console.log(req.params);
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//       const verify = jwt.verify(token, secret);
//       res.render("index", { email: verify.email, status: "Not Verified" });
//     } catch (error) {
//       console.log(error);
//       res.send("Not Verified");
//     }
//   });
  
//   app.post("/reset-password/:id/:token", async (req, res) => {
//     const { id, token } = req.params;
//     const { password } = req.body;
  
//     const oldUser = await User.findOne({ _id: id });
//     if (!oldUser) {
//       return res.json({ status: "User Not Exists!!" });
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     try {
//       const verify = jwt.verify(token, secret);
//       const encryptedPassword = await bcrypt.hash(password, 10);
//       await User.updateOne(
//         {
//           _id: id,
//         },
//         {
//           $set: {
//             password: encryptedPassword,
//           },
//         }
//       );
  
//       res.render("index", { email: verify.email, status: "verified" });
//     } catch (error) {
//       console.log(error);
//       res.json({ status: "Something Went Wrong" });
//     }
//   });

// app.get("/sign-in", (req, res) => {
//   res.render("sign-in");
// });

// app.post("/reset-password/:id/:token", async (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   const oldUser = await User.findOne({ _id: id });
//   if (!oldUser) {
//     return res.json({ status: "User Not Exists!!" });
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     await User.updateOne(
//       {
//         _id: id,
//       },
//       {
//         $set: {
//           password: encryptedPassword,
//         },
//       }
//     );
//     res.json({ status: "Password Updated" });

//     return res.render("index", { email: verify.email, status: "verify" });
//   } catch (error) {
//     console.log(error);
//     return res.json({ status: "something Went Wrong" });
//   }
// });
