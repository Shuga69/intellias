export const orgChartData= [{
    name: "null",
    children: [{
      "name": "Top Level_1",
      "parent": "null",
      "children": [{
        "name": "Level 2: A",
        "parent": "Top Level_1",
        "children": [{
          "name": "Son of A",
          "parent": "Level 2: A"
        }, {
          "name": "Daughter of A",
          "parent": "Level 2: A"
        }]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }],
    }, {
      "name": "Top Level_2",
      "parent": "null",
      "children": [
      {
        "name": "Level 2_2: A",
        "parent": "Top Level_2",
        "children": [
        {
          "name": "Son of A_2",
          "parent": "Level 2_2: A"
        },
        {
          "name": "Daughter of A_2",
          "parent": "Level 2_2: A"
        }]
      },
      {
        "name": "Level 2_2: B",
        "parent": "Top Level_2"
      }]
    }]
  }];