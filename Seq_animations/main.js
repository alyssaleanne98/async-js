// an array defining the animation keyframes for Alice's tumbling effect 
const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  // an object defining the timing option for Alice's animation
  const aliceTiming = {
    duration: 2000, // the duration of the animation in ms
    iterations: 1, // the num of times the animation should repeat (1 time)
    fill: 'forwards' // the animation should apply the final keyframe styles after it ends
  }
  
  // selecting html elements with IDs 'alice1', 'alice2',and 'alice3'
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");


  // applying the animation to the 'alice1' element using the animate() method
  alice1.animate(aliceTumbling, aliceTiming);
