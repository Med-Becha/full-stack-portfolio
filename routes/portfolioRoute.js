const router = require("express").Router();

const {Intro, About, Project, Contact, Experience, Education, User} = require ('../models/portfolioModel');



router.get('/get-portfolio-data', async(req,res) =>{
    try {
        const Intros = await Intro.find();
        const Abouts = await About.find();
        const Projects = await Project.find();
        const Contacts = await Contact.find();
        const Experiences = await Experience.find();
        const Educations = await Education.find();

        res.status(200).send({
            Intro: Intros[0],
            About: Abouts[0],
            Project: Projects,
            Contact: Contacts[0],
            Experience: Experiences,
            Education: Educations
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("/update-intro", async (req, res) =>{
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "intro updated successfully"

    })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/update-about", async (req, res) =>{
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "about updated successfully"

    })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/add-experience", async (req, res) =>{
    try {
        const experience = new Experience(req.body)
        await experience.save()
        res.status(200).send({
            data: experience,
            success: true,
            message:"experience added successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/update-experience", async (req, res) =>{
    try{ 
    const experience = await Experience.findOneAndUpdate(
       
           { _id: req.body._id},
           req.body,
           {new: true}
    )
    res.status(200).send({
        data: experience,
        success: true,
        message: "experience update successfully"
    })
}  catch(error){
    res.status(500).send(error)
}
})

router.post('/delete-experience', async (req, res)=>{
    try {
        const experience = await Experience.findByIdAndDelete({ _id: req.body._id});
        res.status(200).send({
            data: experience,
            success: true,
            message: "experinece deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error)
    }
})


router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save()
        res.status(200).send({
            data: project,
            success: true,
            message: "project addes successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: project,
            success: true,
            message: "project updated successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/delete-project", async (req, res)=>{
    try {
        const project = await Project.findByIdAndDelete({_id: req.body._id});
        res.status(200).send({
            data: project,
            success: true,
            message: "project deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


router.post("/add-Education", async (req, res) => {
    try {
        const education = new Education(req.body);
        await education.save();
        res.status(200).send({
            data: education,
            success: true,
            message: "education added successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/update-Education", async (req, res) => {
    try {
        const education = await Education.findByIdAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: education ,
            success: true,
            message: "education updated successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/delete-Education", async (req, res)=>{
    try {
        const education  = await Education.findByIdAndDelete({_id: req.body._id});
        res.status(200).send({
            data: education ,
            success: true,
            message: "education deleted successfully"
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/update-contact", async (req, res) =>{
    try {
        const contact = await Contact.findByIdAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        )
        res.status(200).send({
            data: contact,
            success: true,
            message: "contact update successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/admin-login', async (req,res)=>{
    try {
        const user = await User.findOne({ 
            username: req.body.username ,
             password: req.body.password
            });
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "login successfully"
            })
        }
        else{
            res.status(200).send({
                data: user,
                success: false,
                message: 'Invalid username or password'
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router