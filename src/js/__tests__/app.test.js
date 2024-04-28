import Team from "../app.js"

test('Teat add new', () => {
    const result = new Team();
  
    expect(result).toEqual(new Team());
});

test('Data team', () => {
    let team = new Team();
    team.add(12);
    const result = team.members.has(12);
  
    expect(result).toEqual(true);
});

test('Trow', () => {
    expect(()=> {
        let team = new Team();
        team.add(12);
        team.add(12);
    }).toThrow();
});

test('Data team2', () => {
    let team = new Team();
    team.addAll(12, 15, 56);
    const result = team.members.size === 3;
  
    expect(result).toEqual(true);
});
