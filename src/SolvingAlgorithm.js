const initialGame = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function checkXAxis(x, y, grid) {
  return grid[y].every((val, index) => {
    if (index === x) {
      return true;
    }
    if (grid[y][x] == val) {
      return false;
    } else {
      return true;
    }
  });
}

function checkYAxis(x, y, grid) {
  return grid.every((row, index) => {
    if (index === y) {
      return true;
    }
    if (row[x] === grid[y][x]) {
      return false;
    } else {
      //   console.log(x);
      return true;
    }
  });
}

function findBlock(x, y) {
  function findCoord(val) {
    if (val <= 2) {
      return 0;
    } else if (val <= 5) {
      return 3;
    } else {
      return 6;
    }
  }
  return [findCoord(x), findCoord(y)];
}

function checkBlock(x, y, grid) {
  let [blockX, blockY] = findBlock(x, y);
  console.log("x,y", blockX, blockY);
  let endBlockY = blockY + 2;
  let endBlockX = blockX + 2;
  while (blockY <= endBlockY + 2) {
    let currentBLockX = blockX;
    while (currentBLockX <= endBlockX + 2) {
      // hey moron this if statement only works for diaganols
      if (
        currentBLockX !== x &&
        blockY !== y &&
        grid[blockY][blockX] === grid[y][x]
      ) {
        console.log("FAILED AT:", currentBLockX, blockY);
        return false;
      }
      //   console.log("checking:", currentBLockX, blockY);
      currentBLockX += 1;
    }
    blockY += 1;
  }
  return true;
}

function checkValidity(x, y, grid) {
  const inputVal = grid[x][y];
  if (
    checkXAxis(x, y, grid) &&
    checkYAxis(x, y, grid) &&
    checkBlock(x, y, grid)
  ) {
    console.log("VALID");
  } else {
    console.log("NOT VALID");
  }
}

function SolvingAlgorithm(grid) {}

export { checkValidity, findBlock };
