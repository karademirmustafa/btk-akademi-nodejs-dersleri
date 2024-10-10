module.exports = {
    validate: (schema) => {
      return async (req, res, next) => {
        try {
          await schema.validateAsync(req.body, { abortEarly: false });
          return next();
        } catch (error) {
          // Joi get error messages
          const errorMessages = error.details.map((detail) => detail.message);
          console.error(errorMessages)
          return res.status(400).json(errorMessages)
        }
      };
    },
  };
  