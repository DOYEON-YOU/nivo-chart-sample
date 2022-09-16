import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineNivo = ({ lineData, setLineData }) => {
  const [data, setData] = useState([]);
  const xArr = [
    'JavaScript',
    'React',
    'Python',
    'Java',
    'Ruby',
    'C',
    'Kotlin',
    'Swift',
    'C++',
    'C#',
    'HTML',
    'CSS',
  ];
  const idArr = [
    'Front-End',
    'Back-End',
    'App-Developer',
    'Data-Engineer',
    'Data-Analyst',
    'Web-Publisher'
  ];

  const dataSettingFn = () => {
    const dataArr = [];
    const yArr = [];
    for (let i = 0; i < xArr.length; i++) {
      // 임의로 데이터 만들어 주기(테스트)
      let y = Math.floor(Math.random() * 950) + 50;
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      yArr.push(y);
      // 좌표 오브젝트 생성
      dataArr.push({ x: xArr[i], y: yArr[i] });
    }
    return dataArr;
  };

    // 데이터 state 수정
    const objSettingFn = () => {
      let arr = [];
      for (let i = 0; i < idArr.length; i++) {
        let obj = { id: '', data: '' };
        obj.id = idArr[i];
        obj.data = dataSettingFn();
        arr.push(obj);
      }
      setData(arr);
    };

    useEffect(() => {
      if (!lineData) return;
      setLineData(true);
      if (data.length)
        setData(prev => {
          const clone = [...prev];
          clone.splice(0);
          return clone;
        });
      objSettingFn();
      setLineData(false);
    }, [lineData]);

  return (
    <div>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=' >-.2f'
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        enablePoints={false}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineNivo;
