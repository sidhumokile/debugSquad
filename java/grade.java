class Grade {
    void calculate(int marks) {
        if (marks >= 90)
            System.out.println("Grade A");
        else if (marks >= 75)
            System.out.println("Grade B");
        else if (marks >= 60)
            System.out.println("Grade C");
        else
            System.out.println("Fail");
    }
}
