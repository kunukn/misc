using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("FindIndex");
            Console.WriteLine($"{Algo.FindIndex(new int[] { 1, 1, 0, 2 })}");
            Console.WriteLine($"{Algo.FindIndex(new int[] { 1, 0, -1, 1 })}");
            Console.WriteLine($"{Algo.FindIndex(new int[] { 1, 1, 1, 123, 3 })}");
            Console.WriteLine($"{Algo.FindIndex(new int[] { -1, 1, -1, 1 })}");


            Console.WriteLine("Press a key to exit");
            Console.ReadKey();            
        }
    }
}
