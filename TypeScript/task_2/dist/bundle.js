/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFhQTtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBWUEsQ0FBQztJQVhHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUMzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDN0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7U0FBTSxDQUFDO1FBQ0osT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDNUMsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNsRSxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDN0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUNwQyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUUsQ0FBQztRQUN4QixPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO1NBQU0sSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDbEMsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2V7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xuXG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNle1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICAgIH1cblxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbiAgICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IGhhdmUgYSBicmVha1wiO1xuICAgIH1cblxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3RvcntcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9ye1xuICAgIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcbiAgICB9XG59XG5cbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmd7XG4gICAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XG4gICAgICAgIHJldHVybiBcIlRlYWNoaW5nIE1hdGhcIjtcbiAgICB9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09IFwiSGlzdG9yeVwiKSB7XG4gICAgICAgIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9