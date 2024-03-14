import DateExtension from '@joi/date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension);

export const meteorSchemaObject = {
  name: 'meteorsSchema',
  validator: Joi.object({
    date: Joi.date().less('now').format('YYYY-MM-DD'),
    count: Joi.boolean().sensitive(),
    were_dangerous_meteors: Joi.boolean().sensitive(),
  }),
};
