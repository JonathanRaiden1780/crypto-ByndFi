import { Component } from 'react';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(...registerables, ArcElement, Tooltip, Legend);

// //Customer Growth

export class Growth extends Component<{}, { options: any, series: any }>  {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        name: 'Growth',
        colors: ['rgb(74, 119, 240)', '#5b3eff'],
        data: [[0, 45],
        [1, 43],
        [2, 47],
        [3, 45],
        [4, 45],
        [5, 45],
        [6, 42],
        [7, 43],
        [8, 45],
        [9, 45],
        [10, 47],
        [11, 42],
        [12, 40],
        [13, 41],
        [14, 38],
        [15, 42],
        [16, 36],
        [17, 42],
        [18, 38],
        [19, 35],
        [20, 35],
        [21, 35],
        [22, 33],
        [23, 31],
        [24, 28],
        [25, 30],
        [26, 26],
        [27, 22],
        [28, 31],
        [29, 31],
        [30, 33],
        [31, 35],
        [32, 42],
        [33, 42],
        [34, 35],
        [35, 38],
        [36, 38],
        [37, 30],
        [38, 31],
        [39, 32],
        [40, 38],
        [41, 42],
        [42, 37],
        [43, 42],
        [44, 44],
        [45, 44],
        [46, 42],
        [47, 39],
        [48, 37],
        [49, 40],
        [50, 42],
        [51, 37],
        [52, 40],
        [53, 42],
        [54, 37],
        [55, 32],
        [56, 36],
        [57, 37],
        [58, 38],
        [59, 42],
        [60, 40],
        [61, 40],
        [62, 43],
        [63, 43],
        [64, 41],
        [65, 40],
        [66, 43],
        [67, 46],
        [68, 47],
        [69, 42],
        [70, 39],
        [71, 41],
        [72, 45],
        [73, 47],
        [74, 51],
        [75, 45],
        [76, 50],
        [77, 52],
        [78, 50],
        [79, 56],
        [80, 55],
        [81, 54],
        [82, 57],
        [83, 58],
        [84, 61],
        [85, 61],
        [86, 64],
        [87, 57],
        [88, 55],
        [89, 48],
        [90, 44],
        [91, 44],
        [92, 47],
        [93, 47],
        [94, 51],
        [95, 45],
        [96, 47],
        [97, 42],
        [98, 44],
        [99, 42],
        [100, 49],] // Replace with your data over time
      }],
      options: {
        chart: {
          type: 'line',
          height: 250,
          width: '100%', // Use 100% width for responsiveness
          toolbar:
          {
            show: false,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.15
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },

        },
        colors: ['rgba(74, 119, 240, 0.7)', '#5b3eff'],
        stroke:
        {
          width: 2,
        },
        xaxis: {
          categories: ['Jan', , , , , , , , , 'Feb', , , , , , , , , 'Mar ', , , , , , , , , 'Apr', , , , , , , , , 'May', , , , , , , , , 'Jun', , , , , , , , , 'Jul', , , , , , , , , 'Aug', , , , , , , , , 'Sep', , , , , , , , , 'Oct', , , , , , , , , 'Nov', , , , , , , , , "Dec"] // Replace with your timeline
        },
        yaxis: {
          title: {
            text: 'Metric Value'
          }
        },
        dataLabels: {
          enabled: false,
        },
      },

    };
  }

  render() {
    return (


      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />


    );
  }
}


export class Customer extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [40, 25, 20, 15],

      options: {
        labels: ["Very Satisfied", "Satisfied", "Neutral", "Unsatisfied"],
        chart: {
          height: 190,
          type: 'donut',
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 8,
            left: -3,
            blur: 5,
            color: '#000',
            opacity: 0.05
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'round',
          colors: "#fff",
          width: 0,
          dashArray: 0,
        },
        plotOptions: {

          pie: {
            expandOnClick: false,
            donut: {
              size: '70%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '20px',
                  color: '#495057',
                  offsetY: -4
                },
                value: {
                  show: false,
                  fontSize: '18px',
                  color: undefined,
                  offsetY: 8,
                  formatter: function (val: any) {
                    return val + "%"
                  }
                },
                total: {
                  show: false,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#495057',
                }

              }
            }
          }
        },
        colors: ['#4a33c8', '#fa8f47', '#37bded', '#5abe94'],
      }

    };
  }

  render() {
    return (
      <div id="Customer-Satisfaction-chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type='donut' height={185} />
      </div>

    )
  }


}


//

export class EXPENSES extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        labels: [''],
        colors: ['#5638ff'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={40} width={50}
      />

    );
  }
}

//
export class PROFIT extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        labels: [''],
        colors: ['#f57b4e'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={40} width={50}
      />

    );
  }
}
export class Bar1 extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#5638ff'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={20} width={80}
      />

    );
  }
}

//
export class Bar2 extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#f88960'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={20} width={80}
      />

    );
  }
}
//
export class Bar3 extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#09b0ec'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={20} width={80}
      />

    );
  }
}
export class Bar4 extends Component<{}, { options: any, series: any }> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4],
        show: false
      },

      ],

      options: {
        chart: {
          type: 'bar',
          height: 55,
          sparkline: {
            enabled: true
          },
          responsive: {
            enabled: true
          },
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            }
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        labels: [''],
        colors: ['#36b37e'],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            show: false
          },
          shared: false,
          intersect: true,
          x: {
            show: false
          },
          y: {

          },
          marker: {
            show: true
          }
        }
      }

    };
  }

  render() {
    return (

      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={20} width={80}
      />

    );
  }
}
