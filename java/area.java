public class area{
	 import java.util.Scanner;
	 
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("enter radius");
		int r=sc.nextInt();
		double a=pi*r*r;
		double pi=3.14;
		
		System.out.println("area of cirle"+a);
	}
}