import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity'; 

@Injectable()
export class StudentsService {

  students: any = [] as Student[];
  maxId: number = 0;

  onModuleInit() {
    this.students.push({ id: ++this.maxId, index: 1,
    firstName: "Łukasz", lastName: "Kąśliwy"});
    this.students.push({ id: ++this.maxId, index: 2,
    firstName: "Marek", lastName: "Nowak"});
    this.students.push({ id: ++this.maxId, index: 3, 
    firstName: "Zenon", lastName: "Zawada"});
    }

  create(createStudentDto: CreateStudentDto) {
    this.maxId += 1;
    var student = new Student;
    student.id = this.maxId;
    student.index = createStudentDto.index;
    student.firstName = createStudentDto.firstName;
    student.lastName = createStudentDto.lastName;
    this.students.push(student);
    return createStudentDto;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const index = this.students.findIndex(student => student.id === id)
    if(index === -1){
      throw new Error("404 NOT FOUND");
    }
    return this.students[index];
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const index = this.students.findIndex(student => student.id === id)
    this.students[index] = {...this.students[index], ...updateStudentDto};
    return this.students;
  }

  remove(id: number) {
    const index = this.students.findIndex(student => student.id === id)
    if(index === -1){
      throw new Error("404 NOT FOUND");
    }
    this.students.splice(id-1, 1);
    return this.students[index];
  }

  replace(id: number, updatedStudent: Student) {
    const index = this.students.findIndex(student => student.id === id)
    this.students[index] = updatedStudent;
    return this.students[index];
  }
}
