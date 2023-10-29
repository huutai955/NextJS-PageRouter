const handleQueryParams = (object: any) => {
  let string = "";
  for (const key in object) {
    // console.log()
    if (key === "filters") {
      const value = encodeURIComponent(
        JSON.stringify({
          filter: object[key],
        })
      );
      string += `filter=${value}&`;
    } else {
      string += `${key}=${object[key]}&`;
    }
    // if (object[key]) {
    //   string += `${key}=${encodeURIComponent(object[key])}&`;
    // }
  }
  return string;
};

export { handleQueryParams };
