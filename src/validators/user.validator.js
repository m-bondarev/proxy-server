import Joi from 'joi';

export const userSchemaObject = {
  name: 'userSchema',
  validator: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    api_key: Joi.string().alphanum().length(40).required(),
  }),
};
