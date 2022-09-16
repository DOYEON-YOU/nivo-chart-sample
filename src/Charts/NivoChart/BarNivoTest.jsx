import { ResponsiveBar } from '@nivo/bar';

const BarNivoTest = () => {
  return (
    <div>
      <ResponsiveBar
        data={[
          {
            hotdog: 139,
            burger: 180,
            sandwich: 61,
            kebab: 178,
            fries: 24,
            donut: 125,
          },
        ]}
        keys={['hotdog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy='feature'
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
        animate={false}
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

export default BarNivoTest;
