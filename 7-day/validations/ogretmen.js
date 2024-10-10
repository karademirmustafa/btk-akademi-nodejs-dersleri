const Joi = require("joi");

const newOgretmenValidation = Joi.object({
    adi:Joi.string().min(10).required("Şöyle bir hata versin"),
    alani:Joi.string(),
    tel_no:Joi.string().length(10)
})

module.exports={newOgretmenValidation}