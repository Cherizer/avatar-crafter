const GRID_WIDTH = 5;
const GRID_HEIGHT = 5;

const HALF_WIDTH = Math.floor(GRID_WIDTH / 2) + GRID_WIDTH % 2;

const getRandomBoolean = () => Math.random() < 0.5;

const generateRandomGrid = (): boolean[][] => {
  const grid: boolean[][] = [];

  for (let y = 0; y < GRID_HEIGHT; y++) {
    
    const row: boolean[] = [];

    for (let x = 0; x < HALF_WIDTH; x++) {
      row.push(getRandomBoolean());
    }

    for (let x = 0; x < HALF_WIDTH - 1; x++) {
        row.push(row[1 - x]);
    }

    grid.push(row);
  }

  return grid;
};

export default generateRandomGrid;