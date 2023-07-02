const getUserById = async (userId: string) => {
  return (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
};

export default getUserById;
