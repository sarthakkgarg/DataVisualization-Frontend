// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = (props) =>{
    let data = [
        {
          "id": props.state.countryList[0]?.country,
          "label": props.state.countryList[0]?.country,
          "value": props.state.countryList[0]?.number,
          "color": "hsl(73, 70%, 50%)"
        },
        {
          "id": props.state.countryList[1]?.country,
          "label": props.state.countryList[1]?.country,
          "value":  props.state.countryList[1]?.number,
          "color": "hsl(138, 70%, 50%)"
        },
        {
          "id": props.state.countryList[2]?.country,
          "label": props.state.countryList[2]?.country,
          "value":  props.state.countryList[2]?.number,
          "color": "hsl(206, 70%, 50%)"
        },
        {
          "id": props.state.countryList[3]?.country,
          "label": props.state.countryList[3]?.country,
          "value":  props.state.countryList[3]?.number,
          "color": "hsl(209, 70%, 50%)"
        },
        {
          "id": props.state.countryList[4]?.country,
          "label": props.state.countryList[4]?.country,
          "value":  props.state.countryList[4]?.number,
          "color": "hsl(31, 70%, 50%)"
        },
        {
          "id": props.state.countryList[5]?.country,
          "label": props.state.countryList[5]?.country,
          "value": props.state.countryList[5]?.number,
          "color": "hsl(73, 70%, 50%)"
        },
        {
          "id": props.state.countryList[6]?.country,
          "label": props.state.countryList[6]?.country,
          "value":  props.state.countryList[6]?.number,
          "color": "hsl(138, 70%, 50%)"
        },
        {
          "id": props.state.countryList[7]?.country,
          "label": props.state.countryList[7]?.country,
          "value":  props.state.countryList[7]?.number,
          "color": "hsl(206, 70%, 50%)"
        },
        // {
        //   "id": props.state.countryList[8]?.country,
        //   "label": props.state.countryList[8]?.country,
        //   "value":  props.state.countryList[8]?.number,
        //   "color": "hsl(209, 70%, 50%)"
        // },
        // {
        //   "id": props.state.countryList[9]?.country,
        //   "label": props.state.countryList[9]?.country,
        //   "value":  props.state.countryList[9]?.number,
        //   "color": "hsl(31, 70%, 50%)"
        // },
        // {
        //   "id": props.state.countryList[10]?.country,
        //   "label": "lisp",
        //   "value":  props.state.countryList[10]?.number,
        //   "color": "hsl(31, 70%, 50%)"
        // }
      ]


return (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'left',
                direction: 'column',
                justify: false,
                translateX: 81,
                translateY: 23,
                itemsSpacing: 0,
                itemWidth: 39,
                itemHeight: 36,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
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
)
    }
export default MyResponsivePie;