students = []


course = {
    "1": "math",
    "2": "english",
    "3": "art"
}
def student_list():
    number_of_students = input("How many students are you adding?")
    for x in range(int(number_of_students)):
        student_name = input("Give a student name.")
        student_grade = input(f"{student_name}'s grade")
        while not student_grade.isdigit():
            student_grade = input(f"Give a valid numeric grade for {student_name}'s grade")
        student_course = input("1 is for math, 2 is for english, 3 is for art.")
        while student_course not in course:
            student_course = input("Add a valid number...1 is for math, 2 is for english, 3 is for art.")

        students.append(
            {
            "name" : student_name,
            "grade" : student_grade,
            "course" : course[student_course]
            }
            )
student_list()
print(students)