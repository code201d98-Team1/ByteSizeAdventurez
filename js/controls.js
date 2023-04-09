'use strict';



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
        borderWidth: 2,
        backgroundColor: 'rgb(20, 93, 160, 0.5',
      },{
        label: 'Times Physics Game Played',
        data: timesPhysics,
        borderWidth: 2,
        backgroundColor: 'rgb(253, 193, 29, 0.5',
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
Chart.defaults.color = 'white';
Chart.defaults.font.size = 30;
Chart.defaults.font.family = 'ABeeZee';
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
