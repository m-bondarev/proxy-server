export const processUser = (req) => {
  console.log(`User: ${JSON.stringify(req.body)}`);
  return true;
};
