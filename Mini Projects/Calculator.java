import java.util.*;
Class Claculator{
    public static void main(String[] args){
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter first no..");
     double a = sc.nextDouble();
     System.out.println("Enter the second no..");
      double b = sc.nextDouble();

     System.out.println("Enter your operstion..");
    sc.nextLine();
     char oper = sc.nextLine().charAt(0);   
    double res =0;
    switch(oper){
       case '+':
       res = a+b;
       break;
       case '-':
       res = a-b;
       break;
       case '*':
       res = a*b;
       break;
       case '/':
       res =a/b;
       break;
       default:
       System.out.println("enter valid operstion..");
    }
    System.out.pritnln(res);
    
    }
}