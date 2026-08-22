class Student :
    def __init__(self, name, roll_No, course, marks):
        self.name = name
        self.roll_No = roll_No
        self.course = course
        self.marks = marks

    def total_marks(self):
        total = self.marks[0] + self.marks[1] + self.marks[2]
        return total

    def display_details(self):
        print("Name : ", self.name)
        print("Roll No : ", self.roll_No)
        print("Course : ", self.course)
        print("Marks : ", self.marks)
    

    def calculate_total(self):
        total = self.total_marks()
        print("Total : ", total)

    def calculate_average(self):
        average = self.total_marks() / 3
        print("Average : ", average)

    def calculate_grade(self):
        avg = self.total_marks() / 3
        if(avg >= 80):
            print("Grade : A")
        elif(avg >= 70 and avg < 80):
            print("Grade : B")
        elif(avg >= 60 and avg < 70):
            print("Grade : c")
        elif(avg >= 50 and avg < 60):
            print("Grade : D")
        elif(avg >= 40 and avg < 50):
            print("Grade : E")
        else:
            print('Grade : F')

    def update_marks(self, marks1, marks2, marks3):
        self.marks[0] = marks1
        self.marks[1] = marks2
        self.marks[2] = marks3

    def result(self):
        avg = self.total_marks() / 3
        if(avg > 40):
            print('Result : Pass')
        else:
            print('Result : Fail')





s1 = Student("Thrishank" , 36, "CSD", [90, 90, 90])
s1.display_details()
s1.calculate_total()
s1.calculate_average()
s1.calculate_grade()
s1.result()