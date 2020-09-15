import styled from 'styled-components';

import Battery from './Battery';
import Tilt from './Tilt';
import { useDroneState, useSocket } from '../hook';

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .status {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState();
  return (
    <DroneStateStyles>
      <p className="status">Status: {status}</p>
      <Battery battery={droneState.bat} />
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.h}
      />
    </DroneStateStyles>
  );
};

export default DroneState;
