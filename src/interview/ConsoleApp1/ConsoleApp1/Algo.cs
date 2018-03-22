using System;

namespace ConsoleApp1
{
    public static class Algo
    {
        /// <summary>
        /// When sum of left side of index is equal to right side of index, then return index
        /// Array must be at lest 3 in length to have valid index value, else return -1
        /// 
        /// Time: O(n), Space: cache O(1)
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static long FindIndex(int[] input)
        {            
            if (input == null || input.Length < 3) return -1;

            int totalSum = 0;
            foreach (var i in input) totalSum += i;

            long leftCache = 0;
            long rightCache = totalSum - input[0];
                       
            for (int i = 1; i <= input.Length - 2; i++)
            {
                int val = input[i];
                int left = input[i - 1];

                leftCache += left;
                rightCache -= val;

                if (leftCache == rightCache) return i;                
            }

            return -1;
        }
    }
}
