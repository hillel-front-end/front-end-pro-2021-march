let personnel = [
  { id : 5, name : 'Luke Skywalker', pilotingScore : 98, shootingScore : 56, isForceUser : true },
  { id : 82, name : 'Sabine Wren', pilotingScore : 73, shootingScore : 99, isForceUser : false },
  { id : 22, name : 'Zeb Orellios', pilotingScore : 20, shootingScore : 59, isForceUser : false },
  { id : 15, name : 'Ezra Bridger', pilotingScore : 43, shootingScore : 67, isForceUser : true },
  { id : 11, name : 'Caleb Dume', pilotingScore : 71, shootingScore : 85, isForceUser : true },
];
// Get the total score of force users only

// let result = personnel.filter(function(user) {
//   return user.isForceUser;
// }).map(function(user) {
//   return user.shootingScore + user.pilotingScore;
// }).reduce(function(acc, score) {
//   return acc + score;
// }, 0)
// let result = personnel
//   .filter((user) => user.isForceUser)
//   .map((user) => user.shootingScore + user.pilotingScore)
//   .reduce((acc, score) => acc + score, 0)
// console.log(result);


let newReleases = [
  {
    'id' : 70111470,
    'title' : 'Die Hard',
    'boxart' : 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating' : 4.0,
    'bookmark' : [],
  },
  {
    'id' : 654356453,
    'title' : 'Bad Boys',
    'boxart' : 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating' : 5.0,
    'bookmark' : [{ id : 432534, time : 65876586 }],
  },
  {
    'id' : 65432445,
    'title' : 'The Chamber',
    'boxart' : 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating' : 4.0,
    'bookmark' : [],
  },
  {
    'id' : 675465,
    'title' : 'Fracture',
    'boxart' : 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating' : 5.0,
    'bookmark' : [{ id : 432534, time : 65876586 }],
  },
];
// Get IDs of the movies with rating >= 5.0
// let result = newReleases.filter(function(movie) {
//   return movie.rating >= 5;
// }).map(function(movie) {
//   return movie.id;
// });
//
// console.log(result);

var movieLists = [
  {
    name : 'New Releases',
    videos : [
      {
        'id' : 70111470,
        'title' : 'Die Hard',
        'boxarts' : [
          { size : '150x200', url : 'http://cdn-0.nflximg.com/images/2891/Die_Hard.jpg' },
          { size : '300x600', url : 'http://cdn-0.nflximg.com/images/2891/Die_Hard.jpg' },
        ],
        'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating' : 4.0,
        'bookmark' : [],
      },
      {
        'id' : 654356453,
        'title' : 'Bad Boys',
        'boxarts' : [
          { size : '150x200', url : 'http://cdn-0.nflximg.com/images/2891/Bad_Boys.jpg' },
          { size : '300x600', url : 'http://cdn-0.nflximg.com/images/2891/Bad_Boys.jpg' },
        ],
        'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating' : 5.0,
        'bookmark' : [{ id : 432534, time : 65876586 }],
      },
    ],
  },
  {
    name : 'Dramas',
    videos : [
      {
        'id' : 65432445,
        'title' : 'The Chamber',
        'boxarts' : [
          { size : '150x200', url : 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg' },
          { size : '300x600', url : 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg' },
        ],
        'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating' : 4.0,
        'bookmark' : [],
      },
      {
        'id' : 675465,
        'title' : 'Fracture',
        'boxarts' : [
          { size : '300x600', url : 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg' },
        ],
        'uri' : 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating' : 5.0,
        'bookmark' : [{ id : 432534, time : 65876586 }],
      },
    ],
  },
];
// Retrieve id, title, and a 150x200 box art url for every video


let moviesFromSections = movieLists
  .reduce(function (acc, moviesSection) {
    return acc.concat(moviesSection.videos);
    // moviesSection.videos.forEach(function(video) {
    //   acc.push(video)
    // })
    // return acc;
  }, []);

let moviesWithMainBoxart = moviesFromSections.map(function (movie) {
  let mainBoxart = movie.boxarts.find(function(boxart) {
    return boxart.size === '150x200';
  });
  if (mainBoxart) {
    movie.boxartUrl = mainBoxart.url;
  }
  return movie;
})

let result = moviesWithMainBoxart.map(function(movie) {
  return {
    id: movie.id,
    title: movie.title,
    boxartUrl: movie.boxartUrl
  }
});

console.log(result);
































