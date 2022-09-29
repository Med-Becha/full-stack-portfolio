const mongoose = require('mongoose')

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
})

const experineceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link:{ type: String}
})

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true
    }
})
const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
       
    },
    link: {
        type: String,
        
    }
})

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    contry:{
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
module.exports ={
    Intro: mongoose.model('intro', introSchema),
    About: mongoose.model('about', aboutSchema),
    Experience: mongoose.model('experience', experineceSchema),
    Project: mongoose.model('project', projectsSchema),
    Education: mongoose.model('education', educationSchema),
    Contact: mongoose.model('contact',contactSchema),
    User: mongoose.model('user', userSchema)
}