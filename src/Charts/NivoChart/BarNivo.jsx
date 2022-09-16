import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarNivo = ({ barData, setBarData }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const nameArr = ['HardStyle', 'HardCore', 'Jazz', 'R&B', 'Hip-Hop'];
  const titleArr = ['A', 'B', 'C', 'D', 'E', 'F'];

  const dataSettingFn = () => {
    const dataArr = [];
    titleArr.map(title => {
      let obj = { title: title };
      nameArr.map(name => {
        let num = Math.floor(Math.random() * 180) + 20;
        obj[name] = num;
        return obj;
      })
      dataArr.push(obj);
      return dataArr;
    })
    setData(dataArr);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count+1)
    }, 100);
  }, [])

  useEffect(() => {
    if (!barData) return;
    if (data.length)
      setData(prev => {
        const clone = [...prev];
        clone.splice(0);
        return clone;
      });
    dataSettingFn();
    setBarData(false);
    console.log(data)
  }, [barData]);

  return (
    <div>
      <ResponsiveBar
        data={data}
        keys={['HardStyle', 'HardCore', 'Jazz', 'R&B', 'Hip-Hop']}
        indexBy='title'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode='grouped'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'pastel1' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role='application'
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default BarNivo;
