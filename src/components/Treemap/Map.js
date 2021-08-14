// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveChoropleth = () => {
    let data = [
        // {
        //     "id": props.state.countryList[0]?.country,
        //     "value": 299526
        //   },
          {
            "id": "AGO",
            "value": 909610
          },
          {
            "id": "ALB",
            "value": 102761
          },
          {
            "id": "ARE",
            "value": 236904
          },
          {
            "id": "ARG",
            "value": 850121
          },
          {
            "id": "ARM",
            "value": 836565
          },
          {
            "id": "ATA",
            "value": 836713
          },
          {
            "id": "ATF",
            "value": 318503
          },
          {
            "id": "AUT",
            "value": 572721
          },
          {
            "id": "AZE",
            "value": 349361
          },
          {
            "id": "BDI",
            "value": 299894
          },
          {
            "id": "BEL",
            "value": 367680
          },
          {
            "id": "BEN",
            "value": 157163
          },
          {
            "id": "BFA",
            "value": 237865
          },
          {
            "id": "BGD",
            "value": 749420
          },
          {
            "id": "BGR",
            "value": 705760
          },
          {
            "id": "BHS",
            "value": 583544
          },
          {
            "id": "BIH",
            "value": 305282
          },
          {
            "id": "BLR",
            "value": 267526
          },
          {
            "id": "BLZ",
            "value": 590958
          },
          {
            "id": "BOL",
            "value": 715103
          },
          {
            "id": "BRN",
            "value": 79577
          },
          {
            "id": "BTN",
            "value": 885477
          },
          {
            "id": "BWA",
            "value": 209795
          },
          {
            "id": "CAF",
            "value": 755926
          },
          {
            "id": "CAN",
            "value": 871449
          },
          {
            "id": "CHE",
            "value": 48377
          },
          {
            "id": "CHL",
            "value": 261472
          },
          {
            "id": "CHN",
            "value": 890744
          },
          {
            "id": "CIV",
            "value": 650392
          },
          {
            "id": "CMR",
            "value": 728533
          },
          {
            "id": "COG",
            "value": 943522
          },
          {
            "id": "COL",
            "value": 436558
          },
          {
            "id": "CRI",
            "value": 154788
          },
          {
            "id": "CUB",
            "value": 673674
          },
          {
            "id": "-99",
            "value": 770986
          },
          {
            "id": "CYP",
            "value": 546328
          },
          {
            "id": "CZE",
            "value": 446933
          },
          {
            "id": "DEU",
            "value": 289772
          },
          {
            "id": "DJI",
            "value": 742705
          },
          {
            "id": "DNK",
            "value": 417795
          },
          {
            "id": "DOM",
            "value": 295446
          },
          {
            "id": "DZA",
            "value": 246227
          },
          {
            "id": "ECU",
            "value": 721786
          },
          {
            "id": "EGY",
            "value": 879562
          },
          {
            "id": "ERI",
            "value": 632115
          },
          {
            "id": "ESP",
            "value": 748758
          },
          {
            "id": "EST",
            "value": 228640
          },
          {
            "id": "ETH",
            "value": 29164
          },
          {
            "id": "FIN",
            "value": 303520
          },
          {
            "id": "FJI",
            "value": 858283
          },
          {
            "id": "FLK",
            "value": 790731
          },
          {
            "id": "FRA",
            "value": 382881
          },
          {
            "id": "GAB",
            "value": 763957
          },
          {
            "id": "GBR",
            "value": 842139
          },
          {
            "id": "GEO",
            "value": 821914
          },
          {
            "id": "GHA",
            "value": 859175
          },
          {
            "id": "GIN",
            "value": 853385
          },
          {
            "id": "GMB",
            "value": 263127
          },
          {
            "id": "GNB",
            "value": 6857
          },
          {
            "id": "GNQ",
            "value": 250555
          },
          {
            "id": "GRC",
            "value": 602873
          },
          {
            "id": "GTM",
            "value": 334715
          },
          {
            "id": "GUY",
            "value": 781040
          },
          {
            "id": "HND",
            "value": 868591
          },
          {
            "id": "HRV",
            "value": 762869
          },
          {
            "id": "HTI",
            "value": 551900
          },
          {
            "id": "HUN",
            "value": 842053
          },
          {
            "id": "IDN",
            "value": 881342
          },
          {
            "id": "IND",
            "value": 58401
          },
          {
            "id": "IRL",
            "value": 858391
          },
          {
            "id": "IRN",
            "value": 551442
          },
          {
            "id": "IRQ",
            "value": 688639
          },
          {
            "id": "ISL",
            "value": 630714
          },
          {
            "id": "ISR",
            "value": 772041
          },
          {
            "id": "ITA",
            "value": 57639
          },
          {
            "id": "JAM",
            "value": 851034
          },
          {
            "id": "JOR",
            "value": 795838
          },
          {
            "id": "JPN",
            "value": 110628
          },
          {
            "id": "KAZ",
            "value": 904964
          },
          {
            "id": "KEN",
            "value": 264285
          },
          {
            "id": "KGZ",
            "value": 561085
          },
          {
            "id": "KHM",
            "value": 88291
          },
          {
            "id": "OSA",
            "value": 769675
          },
          {
            "id": "KWT",
            "value": 40250
          },
          {
            "id": "LAO",
            "value": 777492
          },
          {
            "id": "LBN",
            "value": 587600
          },
          {
            "id": "LBR",
            "value": 753767
          },
          {
            "id": "LBY",
            "value": 314444
          },
          {
            "id": "LKA",
            "value": 462554
          },
          {
            "id": "LSO",
            "value": 73841
          },
          {
            "id": "LTU",
            "value": 859777
          },
          {
            "id": "LUX",
            "value": 749588
          },
          {
            "id": "LVA",
            "value": 72262
          },
          {
            "id": "MAR",
            "value": 519248
          },
          {
            "id": "MDA",
            "value": 664534
          },
          {
            "id": "MDG",
            "value": 995499
          },
          {
            "id": "MEX",
            "value": 575445
          },
          {
            "id": "MKD",
            "value": 347508
          },
          {
            "id": "MLI",
            "value": 564767
          },
          {
            "id": "MMR",
            "value": 138288
          },
          {
            "id": "MNE",
            "value": 328593
          },
          {
            "id": "MNG",
            "value": 546927
          },
          {
            "id": "MOZ",
            "value": 373091
          },
          {
            "id": "MRT",
            "value": 883313
          },
          {
            "id": "MWI",
            "value": 788464
          },
          {
            "id": "MYS",
            "value": 934896
          },
          {
            "id": "NAM",
            "value": 465452
          },
          {
            "id": "NCL",
            "value": 733436
          },
          {
            "id": "NER",
            "value": 33031
          },
          {
            "id": "NGA",
            "value": 495999
          },
          {
            "id": "NIC",
            "value": 627475
          },
          {
            "id": "NLD",
            "value": 174278
          },
          {
            "id": "NOR",
            "value": 417463
          },
          {
            "id": "NPL",
            "value": 79664
          },
          {
            "id": "NZL",
            "value": 432118
          },
          {
            "id": "OMN",
            "value": 86211
          },
          {
            "id": "PAK",
            "value": 712427
          },
          {
            "id": "PAN",
            "value": 933852
          },
          {
            "id": "PER",
            "value": 793208
          },
          {
            "id": "PHL",
            "value": 542308
          },
          {
            "id": "PNG",
            "value": 218945
          },
          {
            "id": "POL",
            "value": 565672
          },
          {
            "id": "PRI",
            "value": 67117
          },
          {
            "id": "PRT",
            "value": 580652
          },
          {
            "id": "PRY",
            "value": 579934
          },
          {
            "id": "QAT",
            "value": 518807
          },
          {
            "id": "ROU",
            "value": 873620
          },
          {
            "id": "RUS",
            "value": 519601
          },
          {
            "id": "RWA",
            "value": 494222
          },
          {
            "id": "ESH",
            "value": 311597
          },
          {
            "id": "SAU",
            "value": 617186
          },
          {
            "id": "SDN",
            "value": 386142
          },
          {
            "id": "SDS",
            "value": 979647
          },
          {
            "id": "SEN",
            "value": 675818
          },
          {
            "id": "SLB",
            "value": 73640
          },
          {
            "id": "SLE",
            "value": 557562
          },
          {
            "id": "SLV",
            "value": 669019
          },
          {
            "id": "ABV",
            "value": 191913
          },
          {
            "id": "SOM",
            "value": 733768
          },
          {
            "id": "SRB",
            "value": 22088
          },
          {
            "id": "SUR",
            "value": 730669
          },
          {
            "id": "SVK",
            "value": 569157
          },
          {
            "id": "SVN",
            "value": 592834
          },
          {
            "id": "SWZ",
            "value": 139820
          },
          {
            "id": "SYR",
            "value": 357365
          },
          {
            "id": "TCD",
            "value": 113856
          },
          {
            "id": "TGO",
            "value": 505642
          },
          {
            "id": "THA",
            "value": 959277
          },
          {
            "id": "TJK",
            "value": 365127
          },
          {
            "id": "TKM",
            "value": 216347
          },
          {
            "id": "TLS",
            "value": 606322
          },
          {
            "id": "TTO",
            "value": 439405
          },
          {
            "id": "TUN",
            "value": 392962
          },
          {
            "id": "TUR",
            "value": 128659
          },
          {
            "id": "TWN",
            "value": 563302
          },
          {
            "id": "TZA",
            "value": 258175
          },
          {
            "id": "UGA",
            "value": 595374
          },
          {
            "id": "UKR",
            "value": 330559
          },
          {
            "id": "URY",
            "value": 944013
          },
          {
            "id": "USA",
            "value": 390712
          },
          {
            "id": "UZB",
            "value": 188803
          },
          {
            "id": "VEN",
            "value": 839071
          },
          {
            "id": "VNM",
            "value": 48710
          },
          {
            "id": "VUT",
            "value": 801662
          },
          {
            "id": "PSE",
            "value": 368541
          },
          {
            "id": "YEM",
            "value": 877145
          },
          {
            "id": "ZAF",
            "value": 534038
          },
          {
            "id": "ZMB",
            "value": 908828
          },
          {
            "id": "ZWE",
            "value": 293389
          },
          {
            "id": "KOR",
            "value": 105669
          }
    ]

 return (
    <ResponsiveChoropleth
        data={data}
        features="/* please have a look at the description for usage */"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
    }
export default MyResponsiveChoropleth;
