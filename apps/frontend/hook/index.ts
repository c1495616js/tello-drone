import { useState, useEffect } from 'react';
import socket from '../socket';

interface IState {
  bat: number;
  pitch: number;
  roll: number;
  yaw: number;
  h: number;
}

export const useDroneState = () => {
  const [droneState, updateDroneState] = useState<IState>({
    bat: 0,
    pitch: 0,
    roll: 0,
    yaw: 0,
    h: 0,
  });

  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);

  return droneState;
};

export const useSocket = () => {
  const [status, updateStatus] = useState('DISCONNECTED');

  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);

  return status;
};
