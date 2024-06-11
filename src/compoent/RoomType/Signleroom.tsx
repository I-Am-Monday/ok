import React, { useEffect, useState } from 'react'
import { arrayValue } from './mocks'
import { IRoomsignler } from './interfaces/'
import Iumsignle from './mocks/Iumsignle';
import { Link } from 'react-router-dom';

export default function Signleroom() {


  const [roomSignle, setRoomSignle] = useState<IRoomsignler[]>([]);

  useEffect(() => {
    setRoomSignle(arrayValue);
  }, []);

  return (
    <div>

        <Iumsignle roomSignle={roomSignle}/>
    </div>
  )
}
