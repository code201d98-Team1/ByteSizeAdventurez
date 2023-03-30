'use strict';


// test array
// const profileArray = [{kidName : 'John', color : 'red', animal : 'Tiger', number: 5, timesVideoWatched : 0, timesPlayedPhysics: 0},{kidName : 'Alice', color : 'blue', animal : 'bear', number: 3, timesVideoWatched : 2, timesPlayedPhysics: 6},{kidName : 'Bob', color : 'green', animal : 'bird', number: 3, timesVideoWatched : 1, timesPlayedPhysics: 36}];

const progressChart = document.getElementById('myChart');
const profileArray = JSON.parse(localStorage.getItem('profileArray')) || [];
console.log(profileArray);

function drawChart(){
  let labels = [];
  let timesVideo = [];
  let timesPhysics = [];
  profileArray.forEach(profile => {
    labels.push(profile.name);
    timesVideo.push(profile.timesVideoWatched);
    timesPhysics.push(profile.timesPlayedPhysics);
  });
  return new Chart(progressChart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Times Videos Watched',
        data: timesVideo,
        borderWidth: 3,
        backgroundColor: 'darkred',
      },{
        label: 'Times Physics Game Played',
        data: timesPhysics,
        borderWidth: 3,
        backgroundColor: 'darkblue',
      }]
    },
    options: {
      layout: {
        padding: 60,
      },
      plugins: {
        title: {
          display: true,
          text: 'Progress Report',
        },
      },
      borderColor: 'black',
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

Chart.defaults.font.weight = 'bold';
Chart.defaults.color = 'black';
Chart.defaults.font.size = 30;
drawChart();


const resetDataEl = document.getElementById('deleteData');
resetDataEl.addEventListener('click', clearData);

function clearData(event){
  const response = confirm('Are you sure you want to clear all data?');
  if (response){
    localStorage.clear();
    alert('Data has been erased!');
    window.location.replace('index.html');
  }
  else {
    alert('Data was not deleted.');
  }
}
