const Employer       = require('../models/EmployerModel');

const createEmployer = (req, res) => {
    const { username, password, email, firstName, lastName, phoneNumber } = req.body;
    const employer   = new Employer({ username, password, email, firstName, lastName, phoneNumber});
    employer
        .save((error, employer) => {
            if(error) {
                console.log("There was an error creating the user. PLease try again");
            }
            res.json(employer);
        });
;}

const editEmployerPassword = (req, res) => {
    const { _id, username} = req.employer;
    const { currentPassword, newPassword } = req.body;

    if(!currentPassword || !newPassword) {
        re.status(422).json({ Message: 'Please enter both current and new passwords'})
    }

    const payload = {
        username: employer.username
    };

    const options = {
    expiresIn: 1000 * 60 * 60 * 24, // 24 hour expiration.
    };

    const token = jwt.sign(payload, process.env.mysecret, options);

    Employer
        .findById(_id)
        .then((employer) => {
            employer.checkPassword(currentPassword, (error, isValid) => {
                if(error) {
                    return res.status(500).json(error);
                }
                if(isValid) {
                    employer.password = newPassword;
                    Employer
                        .save()
                        .then((response) => {
                            const temp = { ...response._doc }
                            delete temp.password;
                            res.json({token, employer: temp});
                        })
                        .catch((error) => {
                            res.status(501).json(error);
                        })
                } else {
                    res.status(403).json({ Message: 'Unauthorized. Unable to change password', error})
                }
            });
        })
        .catch(error => {
            res.status(500).json({ error: 'There was and error updating the password', error });
        });
};

module.exports = {
    createEmployer,
    editEmployerPassword
};