/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    fullTimeEmployee: false,
    location: 'Baku',
    contract: true,
};
var directors1 = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    fullTimeEmployee: false,
    location: 'Baku',
    contract: true,
    numberOfReports: 69,
};
var printTeacher = function (firstName, lastName) {
    var initial = firstName.charAt(0).toUpperCase();
    return "".concat(initial, ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(params) {
        this.firstName = params.firstName;
        this.lastName = params.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log(printTeacher(teacher.firstName, teacher.lastName));
console.log(teacher);
console.log(directors1);
var studentParams = { firstName: "John", lastName: "Doe" };
var student = new StudentClass(studentParams);
console.log(student.workOnHomework());
console.log(student.displayName());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE0QkEsSUFBTSxPQUFPLEdBQVk7SUFDckIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsSUFBSTtDQUNqQjtBQUVELElBQU0sVUFBVSxHQUFjO0lBQzFCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLElBQUk7SUFDZCxlQUFlLEVBQUUsRUFBRTtDQUN0QjtBQUVELElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQVMsRUFBRSxRQUFRO0lBQzNELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsT0FBTyxVQUFHLE9BQU8sZUFBSyxRQUFRLENBQUUsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7SUFJSSxzQkFBWSxNQUEwQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDO0FBSUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEIsSUFBTSxhQUFhLEdBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDakYsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVye1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbixcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcixcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIFtwcm9wbmFtZTogc3RyaW5nXTogYW55LFxufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlcntcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcixcbn1cblxuaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9ue1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvcntcbiAgICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICBsYXN0TmFtZTogc3RyaW5nLFxufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNle1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyxcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcsXG59XG5cblxuY29uc3QgdGVhY2hlcjogVGVhY2hlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdBbWluJyxcbiAgICBsYXN0TmFtZTogJ0FnaGF5ZXYnLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnQmFrdScsXG4gICAgY29udHJhY3Q6IHRydWUsXG59XG5cbmNvbnN0IGRpcmVjdG9yczE6IERpcmVjdG9ycyA9IHtcbiAgICBmaXJzdE5hbWU6ICdBbWluJyxcbiAgICBsYXN0TmFtZTogJ0FnaGF5ZXYnLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICAgIGxvY2F0aW9uOiAnQmFrdScsXG4gICAgY29udHJhY3Q6IHRydWUsXG4gICAgbnVtYmVyT2ZSZXBvcnRzOiA2OSxcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbCA9IGZpcnN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gYCR7aW5pdGlhbH0uICR7bGFzdE5hbWV9YDtcbn1cblxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNle1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBTdHVkZW50Q29uc3RydWN0b3Ipe1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IHBhcmFtcy5maXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBwYXJhbXMubGFzdE5hbWU7XG4gICAgfVxuICAgIFxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cblxufVxuXG5cblxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKHRlYWNoZXIuZmlyc3ROYW1lLHRlYWNoZXIubGFzdE5hbWUpKTtcbmNvbnNvbGUubG9nKHRlYWNoZXIpO1xuY29uc29sZS5sb2coZGlyZWN0b3JzMSk7XG5jb25zdCBzdHVkZW50UGFyYW1zOiBTdHVkZW50Q29uc3RydWN0b3IgPSB7IGZpcnN0TmFtZTogXCJKb2huXCIsIGxhc3ROYW1lOiBcIkRvZVwiIH07XG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcyhzdHVkZW50UGFyYW1zKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7XG5jb25zb2xlLmxvZyhzdHVkZW50LmRpc3BsYXlOYW1lKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==