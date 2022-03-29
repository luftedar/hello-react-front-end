import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRandomGreeting } from '../Redux/greetings/greetings';

function Greetings() {
  const dispatch = useDispatch
  const randomGreeting = useSelector((state) => state.randomGreeting);
  useEffect(() => {
    dispatch(getAllRandomGreeting());
  }, []);
  return (
    <div>{randomGreeting}</div>
  )
}

export default Greetings