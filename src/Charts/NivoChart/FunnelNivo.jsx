import React, { useState, useEffect } from 'react';
import { ResponsiveFunnel } from '@nivo/funnel';

const FunnelNivo = ({ funnelData, setFunnelData }) => {
  const [data, setData] = useState([]);
  const labelArr = ['HardStyle', 'HardCore', 'Jazz', 'R&B', 'Hip-Hop'];

  const dataSettingFn = () => {
    const dataArr = [];
    labelArr.map(label => {
      let obj = { id: label, label: label };
      for (let i=0; i<labelArr.length; i++) {
        let num = Math.floor(Math.random() * 70000) + 30000
        obj.value = num;
      }
      dataArr.push(obj);
      return dataArr;
    });
    dataArr.sort((a, b) => {
      return b.value - a.value;
    })
    setData(dataArr);
  };

  useEffect(() => {
    if (!funnelData) return;
    setFunnelData(true);
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    dataSettingFn();
    setFunnelData(false);
  }, [funnelData]);

  return (
    <div>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat='>-.4s'
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        labelColor={{
          from: 'color',
          modifiers: [['darker', 3]],
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig='wobbly'
      />
    </div>
  );
};

export default FunnelNivo;
