// Press keys 1 - 8 on the keyboard to play a scale
// Uncomment below to play each example

let synth = new Tone.Synth()
synth.toDestination();
let f = 100; // in Hertz
let scale = [];

let n = 12;

function setup() {
  createCanvas(620, 200);
  
  // 1. Derive pentatonic scale  
  // scale[0] = f;
  // scale[3] = f * 3 / 2;
  // scale[5] = f * 2;
  // scale[2] = scale[5] * 2 / 3;
  // scale[1] = scale[3] * 3 / 4;
  // scale[4] = scale[1] * 3 / 2;
  // console.log("pentatonic scale: ", scale);
  
  // 2. Derive equal-tempered chromatic scale
  let f = 100;  
  scale[0] = f;
  let twelfthRootOfTwo = pow(2, 1/n);
  for (let i = 0; i < n; i++) {
    scale[i + 1] = scale[i] * twelfthRootOfTwo;
  }
  console.log("chromatic scale: ", scale);
  
  // 3. Try dividing the pitch circle into 3, 4, 5 steps
  
}


function keyPressed(){
  let pos = parseInt(key) % n - 1;  
  console.log("current frequency: ", scale[pos]);  
  synth.triggerAttack(scale[pos]);
  
  // And these are the notes that get their western names from A through G.  

  //3. play a random equal-tempered pitch between C3 and C5  (three octaves)  
  //these are all within the C major scale, or the A minor scale
  //pitches range from C0 to B8 (C0, D0, E0, F0, G0, A0, B0; C1, D1, and so on). 
  // scale = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", 
  //             "C4", "D4", "E4", "F4", "G4", "A4", "B4", 
  //             "C5", "D5", "E5", "F5", "G5", "A5", "B5" ];
  // let pos = int(random(0, scale.length));
  // let pitch = scale[pos];
  // synth.triggerAttackRelease(pitch, 0.1); 
  
  // Greek modes can be approximated in the equal-tempered system.
  // It is often convenient to represent notes by their MIDI number (MIDI is based on the equal-tempered tuning system). See next example for using MIDI arithmetics to deal with different scales and (approximated) modes.
    
}

function keyReleased(){
  synth.triggerRelease();
}