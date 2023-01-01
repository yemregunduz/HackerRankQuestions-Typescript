export class HackerRankSolution {
  public compareTheTriplets(a: number[], b: number[]): number[] {
    const result: number[] = [0, 0];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        result[0]++;
      } else if (a[i] < b[i]) {
        result[1]++;
      }
    }
    return result;
  }

  public aVeryBigSum(ar: number[]): number {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i];
      
    }
    return sum;
  }

  public diagonalDifference(arr: number[][]): number {
    let difference: number = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i == j) {
          difference += arr[i][j];
        }
        if (i + j + 1 == arr.length) {
          difference -= arr[i][j];
        }
      }
    }
    return Math.abs(difference);
  }

  public plusMinus(arr: number[]): number[] {
    const result: number[] = [0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] > 0 ? result[0]++ : arr[i] < 0 ? result[1]++ : result[2]++ 
    }
    return result.map((number) => number / arr.length);
  }

  public staircase(count: number): string {
    let result: string = "";
    for (let i = 1; i <= count; i++) {
      for (let j = 0; j < count - i; j++) {
        result += " ";
      }
      for (let k = 0; k < i; k++) {
        result += "#";
      }
      result += "\n";
    }
    return result;
  }

  public miniMaxSum(arr: number[]): { max: number; min: number } {
    const result = {
      max: 0,
      min: 0,
    };
    const sortedArr = arr.sort((a, b) => {
      return a - b;
    });
    for (let i = 1; i < arr.length; i++) {
      result.max += sortedArr[i];
      result.min += sortedArr[i - 1];
    }
    return result;
  }

  public birthdayCakeCandles(candles: number[]): number {
    let maxNumber: number = 0;
    let result: number = 0;
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] > maxNumber) {
        result = 0;
        maxNumber = candles[i];
      }
      if (candles[i] == maxNumber) {
        result++;
      }
    }
    return result;
  }

  public timeConversion(str: string): string {
    const hour: number = parseInt(str[0] + str[1]);
    if (str.includes("P")) {
      let result = hour == 12 ? hour : hour + 12;
      str = str.replace(str[0] + str[1], result.toString());
    } else if (str.includes("A")) {
      let result = hour >= 12 ? hour - 12 : hour;
      str = str.replace(
        str[0] + str[1],
        result < 10 ? "0" + result.toString() : result.toString()
      );
    }
    return (str = str.slice(0, str.length - 2));
  }

  public fizzBuzz(maxNumber: number): void {
    for (let i = 1; i <= maxNumber; i++) {
      i % 3 == 0 && i % 5 != 0
        ? console.log("Fizz")
        : i % 5 == 0 && i % 3 != 0
        ? console.log("Buzz")
        : i % 15 == 0
        ? console.log("Fizzbuzz")
        : console.log(i);
    }
  }
  public gradingStudents(originalGrades: number[]): number[] {
    const finalGrades: number[] = [];
    originalGrades.forEach((grade) => {
      if ((grade % 10 >= 7 || grade % 5 >= 3) && grade > 37) {
        grade % 10 > 7
          ? (grade += 10 - (grade % 10))
          : grade % 5 >= 3
          ? (grade += 5 - (grade % 5))
          : grade;
      }
      finalGrades.push(grade);
    });

    return finalGrades;
  }

  public appleAndOrange(
    regionStart: number,
    regionEnd: number,
    appleTreeLocation: number,
    orangeTreeLocation: number,
    distanceOfApplesToAppleTree: number[],
    distanceOfOrangesToOrangeTree: number[]
  ): { countOfApples: number; countOfOranges: number } {
    let result = {
      countOfApples: 0,
      countOfOranges: 0,
    };
    distanceOfApplesToAppleTree.forEach((distance) => {
      if (
        appleTreeLocation + distance >= regionStart &&
        appleTreeLocation + distance <= regionEnd
      ) {
        result.countOfApples++;
      }
    });
    distanceOfOrangesToOrangeTree.forEach((distance) => {
      if (
        orangeTreeLocation + distance >= regionStart &&
        orangeTreeLocation + distance <= regionEnd
      ) {
        result.countOfOranges++;
      }
    });
    return result;
  }

  public numberLineJumps(
    firstKangarooLocation: number,
    firstKangarooSpeed: number,
    secondKangarooLocation: number,
    secondKangarooSpeed: number
  ): string {
    let result = "NO";
    if (secondKangarooSpeed < firstKangarooSpeed) {
      if (
        (secondKangarooLocation - firstKangarooLocation) %
          (firstKangarooSpeed - secondKangarooSpeed) ==
        0
      ) {
        result = "YES";
      } else {
        result = "NO";
      }
    } else if (
      secondKangarooSpeed == firstKangarooSpeed &&
      secondKangarooLocation == firstKangarooLocation
    ) {
      result = "YES";
    }
    return result;
  }

  public betweenTwoSets(firstArray: number[], secondArray: number[]): number {
    let validCount = 0;
    for (let x = 1; x <= 100; x++) {
      if (firstArray.every((number) => x % number == 0)) {
        if (secondArray.every((number) => number % x == 0)) {
          validCount++;
        }
      }
    }
    return validCount;
  }

  public breakingTheRecords(scores: number[]): number[] {
    const result: number[] = [0, 0];
    let mostPoint = scores[0];
    let leastPoint = scores[0];
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > mostPoint) {
        mostPoint = scores[i];
        result[0]++;
      }
      if (scores[i] < leastPoint) {
        leastPoint = scores[i];
        result[1]++;
      }
    }
    return result;
  }

  public subarrayDivision(
    segments: number[],
    day: number,
    month: number
  ): number {
    let segmentCount = 0;
    for (let i = 0; i < segments.length; i++) {
      let subarray = segments.slice(i, i + month);
      let sumOfSubarray = subarray.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      );
      if (sumOfSubarray == day) {
        segmentCount++;
      }
    }
    return segmentCount;
  }

  public divisibleSumPairs(
    lengthOfNumbers: number,
    divisor: number,
    numbers: number[]
  ): number {
    // Why is array size passed as parameter in hacker-rank? numbers.length ???
    let divisibleSumPairsCount = 0;
    for (let i = 0; i < lengthOfNumbers; i++) {
      for (let j = 0; j < lengthOfNumbers; j++) {
        if ((numbers[i] + numbers[j]) % divisor == 0 && i < j) {
          divisibleSumPairsCount++;
        }
      }
    }
    return divisibleSumPairsCount;
  }

}
