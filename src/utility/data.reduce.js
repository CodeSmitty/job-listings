export const getPropertyValues = (myObject, inputValue) => {
  let jobProperty;

  //return myObject.filter(c =>c.languages.includes(inputValue) || c.tools.includes(inputValue))
  myObject.map((obj, i) => {
    for (let key in obj) {
      const value = obj[key];

      if (typeof value === "object") {
        if (value.includes(inputValue)) {
          console.log(key);
          jobProperty = myObject.filter(
            (item) => item[key].indexOf(inputValue) !== -1
          );
        }

        getPropertyValues(value, inputValue);
      }

      if (value === inputValue) {
        console.log("property:" + key, "value:" + value);

        jobProperty = myObject.filter(
          (item) => item[key].indexOf(value) !== -1
        );
      }
    }
  });
  return jobProperty;
};
