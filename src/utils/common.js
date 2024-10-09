const addComma = (num) => {
  const isNegative = num < 0;
  const strNum = Math.abs(num).toString();
  const [integerPart, decimalPart] = strNum.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const isDecimal = decimalPart !== undefined;
  return (
    (isNegative ? "-" : "") +
    formattedInteger +
    (isDecimal ? "." + decimalPart : "")
  );
};

const getNumberIntervals = (arr) => {
  const counts = Array(21).fill(0);

  // 計算每個範圍內的數字
  arr.forEach(([start, end]) => {
    for (let i = start; i <= end; i++) {
      counts[i]++;
    }
  });

  // 獲取特定值的索引
  const getPositions = (condition) =>
    counts.reduce((acc, value, index) => {
      if (condition(value)) acc.push(index);
      return acc;
    }, []);

  const zeroPositions = getPositions((value) => value === 0);
  const greaterThanOnePositions = getPositions((value) => value > 1);

  // 轉換索引為區間
  const toIntervals = (positions) => {
    if (positions.length === 0) return [];

    const intervals = [];
    let start = positions[0];

    positions.reduce((prev, curr) => {
      if (curr !== prev + 1) {
        intervals.push([start, prev]);
        start = curr;
      }
      return curr;
    });

    intervals.push([start, positions[positions.length - 1]]);
    return intervals;
  };

  return {
    notInclude: toIntervals(zeroPositions),
    overlap: toIntervals(greaterThanOnePositions),
  };
};

export { addComma, getNumberIntervals };
