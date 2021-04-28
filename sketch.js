// load samples
let instruments = [
  "piano",
  "bass-electric",
  "guitar-acoustic",
  "guitar-electric",
  "guitar-nylon",
  "harp",
  "xylophone",
];
let samples = SampleLibrary.load({
  instruments: instruments,
  baseUrl: "/samples/",
});

let current;
// loop through instruments and set release, connect to master output
console.log(samples);
for (let property in samples) {
  if (samples.hasOwnProperty(property)) {
    // console.log(samples[property])
    samples[property].release = 0.5;
    samples[property].toDestination();
  }
}

const merge = new Tone.Merge().toDestination();

current = samples["piano"];

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(0);
}

function mousePressed() {
  console.log("Pressing.");

  for (let instrument of instruments) {
    console.log(instrument);
    samples[instrument].triggerAttackRelease(
      Tone.Frequency(64, "midi", "4n").toNote()
    );
  }
}
