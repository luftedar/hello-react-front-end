const APIURL = 'http://127.0.0.1:3000/v1/greetings';

export const fetchRandomGreeting = async () => {
  const req = await (await fetch(APIURL)).json();
  const apiRandomGreeting = req.message;
  return apiRandomGreeting;
};

export default { fetchRandomGreeting };
