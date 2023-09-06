// Each property can be a string or an RGB tuple.
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ^^^^ sacrebleu - we've made a typo!
};
// We want to be able to use array methods on 'red'...
const redComponent = palette.red.at(0);
// or string methods on 'green'...
const greenNormalized = palette.green.toUpperCase();