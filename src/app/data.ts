// Circle Data

export const RiskData: any[] = [
    {risk: 'High Risk', value: 100},
    {risk: 'Medium Risk', value: 100},
    {risk: 'Low Risk', value: 100}
];


export var AvgScoreData = {
  alltime:[
    {score: 'Avg. Saftey Score', value: 80},
    {score: 'Remaining Score', value: 20}
  ],

  last_year:[
    {score: 'Avg. Saftey Score', value: 50},
    {score: 'Remaining Score', value: 50}
  ],

  last_month:[
    {score: 'Avg. Saftey Score', value: 8},
    {score: 'Remaining Score', value: 92}
  ],

  last_week:[
    {score: 'Avg. Saftey Score', value: 99},
    {score: 'Remaining Score', value: 1}
  ],

  today:[
    {score: 'Avg. Saftey Score', value: 83},
    {score: 'Remaining Score', value: 17}
  ],
};



// Legend Data

export class Factor {
  name: string;
  value: number;
}

export var FactorsData = {
  alltime: [
    {name: "Avg. max lateral velocity", value: 89.4},
    {name: "Avg. Max Flexion", value: 91.2},
    {name: "Avg. Twist Velocity", value: 101.2},
    {name: "Max. Moment", value: 32.1},
    {name: "Lift Rate", value: 66.4}
  ],

  last_year: [
    {name: "Avg. max lateral velocity", value: 81.4},
    {name: "Avg. Max Flexion", value: 90.2},
    {name: "Avg. Twist Velocity", value: 10.2},
    {name: "Max. Moment", value: 61},
    {name: "Lift Rate", value: 53.4}
  ],

  last_month: [
    {name: "Avg. max lateral velocity", value: 29.4},
    {name: "Avg. Max Flexion", value: 91},
    {name: "Avg. Twist Velocity", value: 100.2},
    {name: "Max. Moment", value: 33.1},
    {name: "Lift Rate", value: 51.4}
  ],

  last_week: [
    {name: "Avg. max lateral velocity", value: 89.4},
    {name: "Avg. Max Flexion", value: 42.2},
    {name: "Avg. Twist Velocity", value: 100.2},
    {name: "Max. Moment", value: 33.1},
    {name: "Lift Rate", value: 59.4}
  ],

  today: [
    {name: "Avg. max lateral velocity", value: 49.4},
    {name: "Avg. Max Flexion", value: 92},
    {name: "Avg. Twist Velocity", value: 101},
    {name: "Max. Moment", value: 33},
    {name: "Lift Rate", value: 56}
  ]

}



