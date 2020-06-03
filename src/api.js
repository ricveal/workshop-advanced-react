import faker from "faker";

const TIMEOUT = 1000; // ms

const userFactory = () => ({
  id: faker.random.number(),
  name: faker.name.firstName(),
  job: faker.name.jobType(),
  image: `https://picsum.photos/400/300?random=${faker.random.number()}`
});

const userFactory_withError = () => ({
  id: 0,
  name: faker.name.firstName(),
  job: faker.name.jobType(),
  image: `https://picsum.photos/400/300?random=${faker.random.number()}`
});

export const fetchItems = async id => {
  return new Promise(res => {
    const data = [userFactory(), userFactory(), userFactory()];
    setTimeout(() => res(data), TIMEOUT);
  });
};

export const fetchItems_withError = async id => {
  return new Promise(res => {
    const data = [userFactory(), userFactory_withError(), userFactory()];
    setTimeout(() => res(data), TIMEOUT);
  });
};

export const fetchItem = async id => {
  return new Promise(res => {
    setTimeout(() => res(userFactory()), TIMEOUT);
  });
};

export const fetchErrorItem = async id => {
  return setTimeout(
    () =>
      Promise.reject({
        code: 500,
        msg: "Internal Server Error"
      }),
    TIMEOUT
  );
};
