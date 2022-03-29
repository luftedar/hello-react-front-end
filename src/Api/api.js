const APIURL = 'https://localhost:3000/v1/greetings';

export const fetchRandomGreeting = async () => {
  const req = await fetch(APIURL);
  const apiRandomGreeting = await req.json();
  return apiRandomGreeting;
};

export default { fetchRandomGreeting };