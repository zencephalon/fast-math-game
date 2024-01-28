import { Howl } from "howler";
import _ from "lodash";

const sounds = [
  // new Howl({
  //   src: ["/sounds/celebrate/0.wav"],
  // }),
  // new Howl({
  //   src: ["/sounds/celebrate/1.wav"],
  // }),
  new Howl({
    src: ["/sounds/celebrate/2.wav"],
  }),
  // new Howl({
  //   src: ["/sounds/celebrate/3.wav"],
  // }),
];

export const celebrate = () => _.sample(sounds)?.play();
