import React, { useEffect, useState } from 'react';
import { ResponsiveStream } from '@nivo/stream';

const StreamNivo = ({ streamData, setStreamData }) => {
  const [data, setData] = useState([]);
  const labelArr = [
    'HardStyle',
    'HardCore',
    'Jazz',
    'R&B',
    'Hip-Hop',
    'EDM',
    'Ballad',
  ];

  // const dataSettingFn = () => {
  //   const arr = [];
  //   labelArr.map(label => {
  //     const num = Math.floor(Math.random() * 170) + 30
  //     arr.push([label, num]);
  //   })
  //   console.log(arr)
  // }

  const dataSettingFn = () => {
    const dataArr = [];
    const yArr = [];
    for (let i = 0; i < labelArr.length; i++) {
      // 임의로 데이터 만들어 주기(테스트)
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      // 좌표 오브젝트 생성
      let obj = {};
      labelArr.map(label => {
        let num = Math.floor(Math.random() * 950) + 50;
        obj[label] = num;
        return obj;
      });
      dataArr.push(obj);
    }
    setData(dataArr);
  };

  useEffect(() => {
    if (!streamData) return;
    setStreamData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    dataSettingFn();
    setStreamData(false);
  }, [streamData]);

  return (
    <div>
      <ResponsiveStream
        data={data}
        keys={[
          'HardStyle',
          'HardCore',
          'Jazz',
          'R&B',
          'Hip-Hop',
          'EDM',
          'Ballad',
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -40,
        }}
        enableGridX={true}
        enableGridY={false}
        offsetType='silhouette'
        colors={{ scheme: 'red_blue' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default StreamNivo;
