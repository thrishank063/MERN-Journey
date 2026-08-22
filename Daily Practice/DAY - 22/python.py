class Student:
    def __init__(self, name, marks1, marks2, marks3):
        self.name = name
        self.marks1 = marks1
        self.marks2 = marks2
        self.marks3 = marks3
    def avgMarks(self):
        avg = self.marks1 + self.marks3 + self.marks3
        avg /= 3
        return avg

s1 = Student("thrishank", 30, 60, 90)
print(s1.avgMarks())























# student = {
# "name" : "rahul kumar",
# "subjects" : {
# "phy" : 97,
# "chem" : 98,
# "math" : 95
# }
# }

# new_dict = {"name" : "neha kumar", "age": 16}
# student.update(new_dict)

# print(student)

# f = open("demo.txt", "r")
# data = f.read()
# print(data)
# f.close()