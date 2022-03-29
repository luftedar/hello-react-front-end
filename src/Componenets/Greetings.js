import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRandomGreeting } from '../Redux/greetings/greetings';

function Greetings() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greetingReducer);
  useEffect(() => {
    dispatch(getAllRandomGreeting());
  }, []);
  return (
    <div>
      <h3>Refresh Page to See Random Greeting</h3>
      <h2>{randomGreeting}</h2>
    </div>
  );
}

export default Greetings;
