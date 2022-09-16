import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieNivo = ({ pieData, setPieData }) => {
  const [data, setData] = useState([]);
  const nameArr = ['HardStyle', 'HardCore', 'Jazz', 'R&B', 'Hip-Hop'];

  const dataSettingFn = () => {
    const dataArr = [];
    nameArr.map(item => {
      let num = Math.floor(Math.random() * 500)
      let obj = {id: item, label: item, value: num};
      dataArr.push(obj);
      return dataArr;
    })
    setData(dataArr)
  };

  useEffect(() => {
    if (!pieData) return;
    setPieData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    dataSettingFn();
    setPieData(false);
  }, [pieData]);

  return (
    <div>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor='#333333'
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieNivo;
