import React, { useEffect, useState } from 'react';
import { ResponsiveBump } from '@nivo/bump';

const BumpNivo = ({ bumpData, setBumpData }) => {
  const [data, setData] = useState([]);
  const year = [2017, 2018, 2019, 2020, 2021, 2022]
  const idArr = [
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

  const dataSettingFn = () => {
    const dataArr = [];
    const xArr = [];
    const yArr = [];
    for (let i = 0; i < year.length; i++) {
      // 임의로 데이터 만들어 주기(테스트)
      year.map(year => {
        xArr.push(year);
        return xArr;
      })
      let y = Math.floor(Math.random() * (idArr.length - 1)) + 1;
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      // 좌표 오브젝트 생성
      yArr.push(y)

      dataArr.push({ x: xArr[i], y: yArr[i] });
    }
    return dataArr;
  };

  const objSettingFn = () => {
    let arr = [];
    for (let i = 0; i < idArr.length; i++) {
      let obj = { data: '' };
      obj.id = idArr[i];
      obj.data = dataSettingFn();
      arr.push(obj);
    }
    setData(arr);
  };

  useEffect(() => {
    if (!bumpData) return;
    setBumpData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    objSettingFn();
    setBumpData(false);
  }, [bumpData]);

  return (
    <div>
      <ResponsiveBump
        data={data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </div>
  );
};

export default BumpNivo;
