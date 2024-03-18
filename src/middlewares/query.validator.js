import { userSchemaObject } from '../validators/user.validator.js';
import { meteorSchemaObject } from '../validators/meteors.validator.js';
import { v4 as uuidV4 } from 'uuid';
import { HttpStatusCode } from 'axios';

const supportedMethods = ['get', 'post'];

export const queryValidator = (req, res, next) => {
  if (!supportedMethods.includes(req.method.toLowerCase())) {
    next();
  }

  const schema = req.path.substring(1);
  const validatorObjects = [userSchemaObject, meteorSchemaObject];

  validatorObjects
    .filter((object) => object.name.startsWith(schema))
    .map((object) => {
      const objectToValidate = schema === 'user' ? req.body : req.query;

      return object.validator.validateAsync(objectToValidate, {
        abortEarly: false,
      });
    })
    .map((promise) => {
      return promise
        .then((value) => {
          req.query = value;
          next();
        })
        .catch((reason) => failedValidation(res, reason));
    });
};

const failedValidation = (res, reason) => {
  const ref = uuidV4();
  const status = HttpStatusCode.UnprocessableEntity;

  console.error(`Validation error ${ref} - ${reason.message}`);

  const error = {
    ref: ref,
    status: status,
    errors: reason.details.map(({ message, type }) => ({
      message: message.replace(/['"]/g, ''),
      type,
    })),
  };

  return res.status(status).json(error);
};
