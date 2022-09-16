import React, { useEffect, useState } from 'react';
import { ResponsiveRadar } from '@nivo/radar';

const RadarNivo = ({ radarData, setRadarData }) => {

  const [data, setData] = useState([]);
  const nameArr = ['HardStyle', 'HardCore', 'Jazz', 'R&B', 'Hip-Hop'];
  const idArr = ['A', 'B', 'C']
  
  const dataSettingFn = () => {
    const dataArr = [];
    nameArr.map(item => {
      let obj = {song: item};
      idArr.map(id => {
        let num = Math.floor(Math.random() * 90) + 10
        obj[id] = num;
        return obj;
      })
      dataArr.push(obj);
      return dataArr;
    })
    setData(dataArr)
  };

  useEffect(() => {
    if (!radarData) return;
    setRadarData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    dataSettingFn();
    setRadarData(false);
  }, [radarData]);

  return (
    <div>
      <ResponsiveRadar
        data={data}
        keys={[ 'A', 'B', 'C']}
        indexBy="song"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  );
};

export default RadarNivo;