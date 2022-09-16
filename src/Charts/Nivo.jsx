import React, { useState, useSyncExternalStore } from 'react';
import ScatterNivo from './NivoChart/ScatterNivo';
import HeatNivo from './NivoChart/HeatNivo';
import BarNivo from './NivoChart/BarNivo';
import PieNivo from './NivoChart/PieNivo';
import LineNivo from './NivoChart/LineNivo';
import BumpNivo from './NivoChart/BumpNivo';
import AreaBumpNivo from './NivoChart/AreaBumpNivo';
import RadarNivo from './NivoChart/RadarNivo';
import FunnelNivo from './NivoChart/FunnelNivo';
import StreamNivo from './NivoChart/StreamNivo';
import BarNivoTest from './NivoChart/BarNivoTest';

const Nivo = () => {
  // 차트 렌더해 주는 State
  const [scatData, setScatData] = useState(true);
  const [heatData, setHeatData] = useState(true);
  const [barData, setBarData] = useState(true);
  const [pieData, setPieData] = useState(true);
  const [lineData, setLineData] = useState(true);
  const [bumpData, setBumpData] = useState(true);
  const [areaBumpData, setAreaBumpData] = useState(true);
  const [radarData, setRadarData] = useState(true);
  const [funnelData, setFunnelData] = useState(true);
  const [streamData, setStreamData] = useState(true);

  return (
    <div className='wrap'>
      <h2>ScatterPlot Chart</h2>
      <ScatterNivo scatData={scatData} setScatData={setScatData} />
      <button onClick={() => setScatData(true)}>Data Change</button>
      <hr />
      <h2>HeatMap Chart</h2>
      <HeatNivo heatData={heatData} setHeatData={setHeatData} />
      <button onClick={() => setHeatData(true)}>Data Change</button>
      <hr />
      <h2>Bar Chart</h2>
      <BarNivo barData={barData} setBarData={setBarData} />
      <button onClick={() => setBarData(true)}>Data Change</button>
      <hr />
      <h2>Pie Chart</h2>
      <PieNivo pieData={pieData} setPieData={setPieData} />
      <button onClick={() => setPieData(true)}>Data Change</button>
      <hr />
      <h2>Line Chart</h2>
      <LineNivo lineData={lineData} setLineData={setLineData} />
      <button onClick={() => setLineData(true)}>Data Change</button>
      <hr />
      <h2>Bump Chart</h2>
      <BumpNivo bumpData={bumpData} setBumpData={setBumpData} />
      <button onClick={() => setBumpData(true)}>Data Change</button>
      <hr />
      <h2>Area Bump Chart</h2>
      <AreaBumpNivo
        areaBumpData={areaBumpData}
        setAreaBumpData={setAreaBumpData}
      />
      <button onClick={() => setAreaBumpData(true)}>Data Change</button>
      <hr />
      <h2>Radar Chart</h2>
      <RadarNivo radarData={radarData} setRadarData={setRadarData} />
      <button onClick={() => setRadarData(true)}>Data Change</button>
      <hr />
      <h2>Funnel Chart</h2>
      <FunnelNivo funnelData={funnelData} setFunnelData={setFunnelData} />
      <button onClick={() => setFunnelData(true)}>Data Change</button>
      <hr />
      <h2>Stream Chart</h2>
      <StreamNivo streamData={streamData} setStreamData={setStreamData} />
      <button onClick={() => setStreamData(true)}>Data Change</button>
      <hr />
      <BarNivoTest/>
    </div>
  );
};

export default Nivo;
