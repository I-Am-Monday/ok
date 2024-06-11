import React from 'react';
import { IRoomsignler } from '../interfaces/index';
import { Link } from 'react-router-dom';
interface ItumSingleProps {
  roomSignle: IRoomsignler[];
}

const ItumSingle: React.FC<ItumSingleProps> = ({ roomSignle }) => {
  return (
    <div>
      {roomSignle.map((room) => (
        <div key={room.id}>
          <h2>{room.abTitle}</h2>
          <h3>{room.title}</h3>
          <img src={room.img} alt={room.title} />
          <p>{room.content}</p>
          <Link to={'/room'}>mu room</Link>
        </div>
      ))}
    </div>
  );
};

export default ItumSingle;