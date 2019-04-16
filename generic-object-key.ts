const refreshData = async <
  TData extends { [T in TProperty]: string },
  TProperty extends keyof TData
>(
  property: TProperty,
  data: TData
) => {
  const misc = data[property];
};

const data = { name: "shane", another: "more" };

refreshData("name", data);
refreshData("another", data);
refreshData("notName", data);
