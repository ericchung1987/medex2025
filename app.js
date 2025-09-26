//jshint esversion:6
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportlocalMongoose = require('passport-local-mongoose')
const findOrCreate = require('mongoose-findorcreate')
const { authenticate } = require('passport')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }),
)

app.use(passport.initialize())
app.use(passport.session())
// mongoose.connect('mongodb://127.0.0.1:27017/examDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
mongoose.connect("mongodb+srv://ericchung:password1234@medex.34ghdpp.mongodb.net/?retryWrites=true&w=majority&appName=medex", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  password: String,
  email: String,
  mcqStarted: Boolean,
  mcqCompleted: Boolean,
  mcqStartTime: String,
  osceStarted: Boolean,
  osceCompleted: Boolean,
  osceStartTime: String,
  rapidStarted: Boolean,
  rapidCompleted: Boolean,
  rapidStartTime: String,
  mcqAnswer: Array,
  osceAnswer: Array,
  rapidAnswer: Array,
  mcqScore: String,
  osceScore: String,
  rapidScore: String,
  surveyScore: Array,
  surveyComment: String,
  surveyCompleted: Boolean,
  osceMark: Array,
  rapidMark: Array,
})

userSchema.plugin(passportlocalMongoose)
userSchema.plugin(findOrCreate)

const User = new mongoose.model('User', userSchema)

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get('/', function (req, res) {
  
  res.redirect('/userpage')
})

app.get('/osce', function (req, res) {
  const osce = require('./osce.json')
  if (req.isAuthenticated()) {
    if (!req.user.osceStarted) {
      let time = new Date().getTime()
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { osceStarted: true, osceStartTime: time },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)
          }
        },
      )
    }

    res.render('osce', {
      userData: req.user,
      osce: JSON.stringify(osce),
    })
  } else {
    res.render('login')
  }
})

app.get('/rapid', function (req, res) {
  const rapid = require('./rapid.json')
  if (req.isAuthenticated()) {
    if (!req.user.rapidStarted) {
      let time = new Date().getTime()
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { rapidStarted: true, rapidStartTime: time },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)

          }
        },
      )
    }
    res.render('rapid', {
      userData: req.user,
      rapid: JSON.stringify(rapid),
    })
  } else {
    res.render('login')
  }
})

app.get('/mcq', function (req, res) {
  const mcq = require('./mcq.json')
  if (req.isAuthenticated()) {
    if (!req.user.mcqStarted) {
      let time = new Date().getTime()
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { mcqStarted: true, mcqStartTime: time },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)
          }
        },
      )
    }

    res.render('mcq', {
      userData: req.user,
      mcq: JSON.stringify(mcq),
    })
  } else {
    res.render('login')
  }
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/login')
})

app.get('/admin', function (req, res) {
  res.render('admin')
})

app.get('/1234secret', function (req, res) {
  res.render('register')
})

app.get('/userpage', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('userpage', {
      userData: req.user,
    })
  } else {
    res.redirect('login')
  }
})

app.post('/register', (req, res) => {
  User.findOne(
    {
      username: req.body.username,
    },
    (err, user) => {
      if (err) {
        console.log(err)
      }
      if (user) {
        return res.render('register', {
          message: 'User already exist, pick another username',
        })
      } else {
        User.register(
          {
            username: req.body.username,
            fullname: req.body.name,
            mcqStarted: false,
            mcqCompleted: false,
            mcqStartTime: 'empty',
            osceStarted: false,
            osceCompleted: false,
            osceStartTime: 'empty',
            rapidStarted: false,
            rapidCompleted: false,
            rapidStartTime: 'empty',
            mcqAnswer: [
              {
                '1': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '2': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '3': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '4': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '5': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '6': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '7': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '8': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '9': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '10': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '11': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '12': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '13': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '14': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '15': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '16': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '17': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '18': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '19': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '20': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '21': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '22': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '23': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '24': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '25': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '26': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '27': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '28': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '29': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '30': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '31': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '32': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '33': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '34': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '35': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '36': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '37': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '38': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '39': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '40': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '41': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '42': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '43': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '44': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '45': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '46': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '47': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '48': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '49': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '50': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
              },
            ],
            osceAnswer: [
              {
                '1': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '2': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '3': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '4': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '5': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '6': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '7': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '8': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '9': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '10': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '11': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '12': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '13': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '14': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '15': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '16': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '17': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                },
                '18': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '19': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
                '20': {
                  A: '',
                  B: '',
                  C: '',
                  D: '',
                  E: '',
                },
              },
            ],
            rapidAnswer: [
              {
                '1': "",
                '2': "",
                '3': "",
                '4': "",
                '5': "",
                '6': "",
                '7': "",
                '8': "",
                '9': "",
                '10': "",
                '11': "",
                '11': "",
                '12': "",
                '13': "",
                '14': "",
                '15': "",
                '16': "",
                '17': "",
                '18': "",
                '19': "",
                '20': "",
                '21': "",
                '22': "",
                '23': "",
                '24': "",
                '25': ""
              }
            ],
            mcqScore: '',
            osceScore: '',
            rapidScore: '',
            surveyScore: [],
            surveyComment: '',
            surveyCompleted: false,
            osceMark: [],
            rapidMark: [],
          },
          req.body.password,
          (err, user) => {
            if (err) {
              console.log(err)
              res.render('register')
            } else {
              passport.authenticate('local')(req, res, () => {
                res.redirect('/userpage')
              })
            }
          },
        )
      }
    },
  )
})

app.post('/login', (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  })
  console.log(user)
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      // *** Display message without using flash option
      // re-render the login form with a message
      return res.render('login', {
        messagelogin: info.message,
      })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.redirect('/userpage')
    })
  })(req, res, next)
})

app.post('/admin', (req, res) => {
  if (req.body.username == 'eric' && req.body.password == 'adeline') {
    res.render('register')
  } else {
    res.render('admin', {
      message: 'wrong credential details',
    })
  }
})

// update stuff
app.post('/updateosce', (req, res) => {
  if (req.isAuthenticated()) {
    let answer = {}
    if (req.body.question_quant == '4') {
      answer['A'] = req.body.A
      answer['B'] = req.body.B
      answer['C'] = req.body.C
      answer['D'] = req.body.D
    } else if (req.body.question_quant == '5') {
      answer['A'] = req.body.A
      answer['B'] = req.body.B
      answer['C'] = req.body.C
      answer['D'] = req.body.D
      answer['E'] = req.body.E
    }

    User.findOneAndUpdate(
      {
        username: req.body.username,
      },
      {
        $set: { ['osceAnswer.0.' + req.body.question]: answer },
      },
      function (error, success) {
        if (error) {
          console.log(error)
        } else {
          console.log(success)
          res.sendStatus(204)
        }
      },
    )
  }
})

app.post('/updaterapid', (req, res) => {
  if (req.isAuthenticated()) {
    let answer = req.body.answer;

    User.findOneAndUpdate(
      {
        username: req.body.username,
      },
      {
        $set: { ['rapidAnswer.0.' + req.body.question]: answer },
      },
      function (error, success) {
        if (error) {
          console.log(error)
        } else {
          console.log(success)
          res.sendStatus(204)
        }
      },
    )
  }
})


app.post('/updatemcq', (req, res) => {
  if (req.isAuthenticated()) {
    let answer = {}

    answer['A'] = req.body.A
    answer['B'] = req.body.B
    answer['C'] = req.body.C
    answer['D'] = req.body.D
    answer['E'] = req.body.E

    User.findOneAndUpdate(
      {
        username: req.user.username,
      },
      {
        $set: { ['mcqAnswer.0.' + req.body.question]: answer },
      },
      function (error, success) {
        if (error) {
          console.log(error)
        } else {
          console.log(success)
          res.sendStatus(204)
        }
      },
    )
  }
})

app.post('/oscecomplete', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.osceCompleted == false) {
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { osceCompleted: true },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)
          }
        },
      )
    } else {
      res.sendStatus(204)
    }
  }
})

app.post('/rapidcomplete', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.rapidCompleted == false) {
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { rapidCompleted: true },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)
          }
        },
      )
    } else {
      res.sendStatus(204)
    }
  }
})

app.get('/test', (req, res) => {
  if (req.isAuthenticated()) {
    // swapped user answer and correct answer, if you got time pls swap properly
    const user_answer = require('./mcqanswer.json')
    const answer = req.user.mcqAnswer[0]
    let marklist = []
    let total_score

    Array(answer).forEach(function (item) {
      let qnumber = Object.keys(item)
      let mark = 0

      for (let i = 0; i < qnumber.length; i++) {
        let number = Object.keys(item[qnumber[i]])
        for (let j = 0; j < number.length; j++) {
          if (
            item[qnumber[i]][number[j]] == user_answer[qnumber[i]][j] &&
            item[qnumber[i]][number[j]] != ''
          ) {
            mark = mark + 1
          } else if (
            item[qnumber[i]][number[j]] != user_answer[qnumber[i]][j] &&
            item[qnumber[i]][number[j]] != ''
          ) {
            mark = mark - 1
          }
        }
        if (mark < 0) {
          mark = 0
          marklist.push(mark)
        } else {
          marklist.push(mark)
          mark = 0
        }
      }
    })
    total_score = (marklist.reduce((a, b) => a + b, 0) / 250) * 100
  }
})

app.post('/mcqcomplete', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.mcqCompleted == false) {
      // swapped user answer and correct answer, if you got time pls swap properly
      const user_answer = require('./mcqanswer.json')
      const answer = req.user.mcqAnswer[0]
      let marklist = []
      let total_score = 0

      Array(answer).forEach(function (item) {
        let qnumber = Object.keys(item)
        let mark = 0

        for (let i = 0; i < qnumber.length; i++) {
          let number = Object.keys(item[qnumber[i]])
          for (let j = 0; j < number.length; j++) {
            if (
              item[qnumber[i]][number[j]] == user_answer[qnumber[i]][j] &&
              item[qnumber[i]][number[j]] != ''
            ) {
              mark += 1
            } else if (
              item[qnumber[i]][number[j]] != user_answer[qnumber[i]][j] &&
              item[qnumber[i]][number[j]] != ''
            ) {
              mark -= 1
            }
          }
          if (mark < 0) {
            mark = 0
            marklist.push(mark)
          } else {
            marklist.push(mark)
            mark = 0
          }
        }
      })
      total_score = (marklist.reduce((a, b) => a + b, 0) / 250) * 100
      User.findOneAndUpdate(
        {
          username: req.user.username,
        },
        {
          $set: { mcqCompleted: true, mcqScore: total_score },
        },
        function (error, success) {
          if (error) {
            console.log(error)
          } else {
            console.log(success)
          }
        },
      )
    } else {
      res.sendStatus(204)
    }
  }
})

app.get('/oscesummary', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('oscesummary', {
      userData: req.user,
      osceAnswer: JSON.stringify(req.user.osceAnswer[0]),
    })
  } else {
    res.redirect('login')
  }
})

app.get('/rapidsummary', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('rapidsummary', {
      userData: req.user,
      rapidAnswer: JSON.stringify(req.user.rapidAnswer[0]),
    })
  } else {
    res.redirect('login')
  }
})

// for marking
app.get('/oscemark', (req, res) => {
  User.findOne(
    {
      username: req.query.username,
    },
    (err, user) => {
      if (err) {
        console.log(err)
      } else {
        res.render('oscemark', {
          userData: user,
          osceAnswer: JSON.stringify(user.osceAnswer[0]),
        })
      }
    },
  )
})

app.post('/oscemark', (req, res) => {
  let answer = []
  const nonIntArray = Object.values(req.body[0])
  for (var i = 0; i < nonIntArray.length; i++) {
    answer.push(parseFloat(nonIntArray[i]))
  }

  score = (answer.reduce((a, b) => a + b, 0) / 92) * 100;

  User.findOneAndUpdate(
    {
      username: req.body.username,
    },
    {
      $set: { osceScore: score, osceMark: answer },
    },
    function (error, success) {
      if (error) {
        console.log(error)
      } else {
        res.redirect('/marking')
      }
    },
  )
})

app.get('/rapidmark', (req, res) => {
  User.findOne(
    {
      username: req.query.username,
    },
    (err, user) => {
      if (err) {
        console.log(err)
      } else {
        res.render('rapidmark', {
          userData: user,
          rapidAnswer: JSON.stringify(user.rapidAnswer[0]),
        })
      }
    },
  )
})

app.post('/rapidmark', (req, res) => {
  let answer = []
  const nonIntArray = Object.values(req.body[0])
  for (var i = 0; i < nonIntArray.length; i++) {
    answer.push(parseFloat(nonIntArray[i]))
  }

  score = answer.reduce((a, b) => a + b, 0)

  User.findOneAndUpdate(
    {
      username: req.body.username,
    },
    {
      $set: { rapidScore: score, rapidMark: answer },
    },
    function (error, success) {
      if (error) {
        console.log(error)
      } else {
        res.redirect('/marking')
      }
    },
  )
})

app.get('/mcqsummary', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('mcqsummary', {
      userData: req.user,
      mcqAnswer: JSON.stringify(req.user.mcqAnswer[0]),
    })
  } else {
    res.redirect('login')
  }
})

app.get('/mcqmark', (req, res) => {
  const mcqAnswer = require('./mcqanswer.json')
  if (req.isAuthenticated()) {
    res.render('mcqmark', {
      userData: req.user,
      mcqAnswer: JSON.stringify(req.user.mcqAnswer[0]),
      realAnswer: JSON.stringify(mcqAnswer),
    })
  } else {
    res.redirect('login')
  }
})

app.get('/listing', function (req, res) {
  User.find({}, function (err, users) {
    const myJSON = JSON.stringify(users)
    res.render('listing', { users: myJSON })
  })
})

app.get('/marking', function (req, res) {
  User.find({}, function (err, users) {
    const myJSON = JSON.stringify(users)
    res.render('marking', { users: myJSON })
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at port 3000`)
})
