import create from 'zustand'
import {createPart1Slice} from "./part1Slice";
import {createPart2Slice} from "./part2Slice";

export const useBoundStore = create((...a) => ({
  ...createPart1Slice(...a),
  ...createPart2Slice(...a),
}))