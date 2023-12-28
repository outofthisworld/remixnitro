import defu from "defu";

const o1 = {
  one: 1,
  deep: {
    two: 2,
  },
  deepdeep: {
    deep: {
      three: 3,
    },
  },
};

const o2 = {
  four: 4,
  deep: {
    five: 5,
    two: 3,
  },
  deepdeep: {
    other: {
      one: 1,
    },
    deep: {
      one: 1,
    },
  },
};

console.log(defu(o2, o1));
