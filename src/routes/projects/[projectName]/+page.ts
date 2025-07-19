export function load({ params }:any) {
  const { projectName } = params;

  // You can use the projectName to load data here
  return {
    projectName,
  };
}
