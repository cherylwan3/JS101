let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// yes, forEach method uses the original object that demoObject points to
// and can make changes to every value in that object

// my own nested object
let munsters1 = {
  Herman: { age: 32, gender: "male", children: { girl: 'Ally', boy: 'Ash'}},
  Lily: { age: 30, gender: "female", children: { girl: 'Ally', boy: 'Ash'} },
  Grandpa: { age: 402, gender: "male", children: { girl: 'Ally', boy: 'Ash'} },
  Eddie: { age: 10, gender: "male", children: { girl: 'Ally', boy: 'Ash'} },
  Marilyn: { age: 23, gender: "female", children: { girl: 'Ally', boy: 'Ash'} }
};
