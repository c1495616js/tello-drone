import styled from 'styled-components';

interface StyleProps {
  level: number;
}

const BatteryStyles = styled.div<StyleProps>`
  width: 100%;
  --color: ${(props) => (props.level > 20 ? '#1af21a' : '#bb0707')};
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  background: #c5c5c5;

  .batteryLevel {
    transition: all 0.5s;
    height: ${(props) => props.level}%;
    text-align: center;
    color: white;
    display: block;
    background: var(--color);
  }
`;

interface IProps {
  battery: number;
}

const Battery: React.FC<IProps> = ({ battery = 60 }) => (
  <BatteryStyles level={battery}>
    <span className="batteryLevel">{battery}%</span>
  </BatteryStyles>
);

export default Battery;
