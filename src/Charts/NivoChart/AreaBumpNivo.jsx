import React, { useEffect, useState } from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';

const AreaBumpNivo = ({ areaBumpData, setAreaBumpData }) => {
  const [data, setData] = useState([]);
  const idArr = [
    'Front-End',
    'Back-End',
    'App-Developer',
    'Data-Engineer',
    'Data-Analyst',
    'Web-Publisher',
  ];

  const dataSettingFn = () => {
    const dataArr = [];
    const yArr = [];
    const xArr = [];
    for (let i = 2017; i < 2023; i++) {
      xArr.push(i);
      // 임의로 데이터 만들어 주기(테스트)
      let y = Math.floor(Math.random() * 100);
      // 데이터에서 x, y값 뽑아와서 넣어줘야 함
      yArr.push(y);
      // 좌표 오브젝트 생성
    }
    for (let i = 0; i < xArr.length; i++)
      dataArr.push({ x: xArr[i], y: yArr[i] });
    return dataArr;
  };

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
    if (!areaBumpData) return;
    setAreaBumpData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    objSettingFn();
    setAreaBumpData(false);
  }, [areaBumpData]);

  return (
    <div>
      <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: 'nivo' }}
        blendMode='multiply'
        startLabel='id'
        endLabel='id'
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
      />
    </div>
  );
};

export default AreaBumpNivo;
