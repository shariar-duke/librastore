export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        ...item, // Spread the current item (e.g., a MongoDB document)
        id: item._id.toString(), // Add a new field `id` with the string representation of _id
      };
    })
    .map(({ _id, ...rest }) => rest); // Remove the _id field and keep the rest of the fields

  return mappedArray; // Return the new array
};

export const replaceMongoIdInObject = (object) => {
  const { _id, ...updatedObj } = { ...object, id: object._id.toString() };

  return updatedObj;
};
