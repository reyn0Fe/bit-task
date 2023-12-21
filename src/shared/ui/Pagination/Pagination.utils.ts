const getSmallButtons = (count: number) => {
  const buttons: string[] = [];

  for (let i = 1; i < count + 1; i++) {
    buttons.push(i.toString());
  }

  return buttons;
};

const getMiddleButtons = (start: number, end: number) => {
  const buttons: string[] = [];

  for (let i = start; i < end; i++) buttons.push(i.toString());

  return buttons;
};

export const getPaginationButtons = (activePage: number, count: number) => {
  if (count <= 5) return getSmallButtons(count);

  let buttons: string[] = [];
  let anchorPoint = "middle";

  if (activePage < 3) anchorPoint = "left";
  if (activePage + 3 >= count) anchorPoint = "right";

  if (anchorPoint === "left") {
    buttons = getMiddleButtons(1, 5);
    buttons.push("", (count - 1).toString());
    return buttons;
  }

  if (anchorPoint === "right") {
    return ["1", "", ...getMiddleButtons(count - 4, count)];
  }

  buttons = ["1", "", ...getMiddleButtons(activePage - 1, activePage + 2)];
  buttons.push("", (count - 1).toString());

  return buttons;
};
