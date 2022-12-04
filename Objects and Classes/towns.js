function towns(inputArr){

    let city = {};

  for (const line of inputArr) {
    
    // let spliteFromLine = line.split(' | ');
    // let cityName = spliteFromLine[0];
    // let latitude = spliteFromLine[1];
    // let longitude = spliteFromLine[2];

    let [cityName, latitude, longitude] = line.split(' | ');

    city.townsName = cityName;
    city.latitude = Number(latitude).toFixed(2);
    city.longitude = Number(longitude).toFixed(2);

    console.log(city);
  }


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);