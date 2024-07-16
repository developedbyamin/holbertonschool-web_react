/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
// Example usage:
const major1 = { credits: 3, brand: 'MajorCredits' };
const major2 = { credits: 4, brand: 'MajorCredits' };
const minor1 = { credits: 1, brand: 'MinorCredits' };
const minor2 = { credits: 2, brand: 'MinorCredits' };
const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);
console.log('Total Major Credits:', totalMajor);
console.log('Total Minor Credits:', totalMinor);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhzdWJqZWN0MSwgc3ViamVjdDIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICAgICAgYnJhbmQ6ICdNYWpvckNyZWRpdHMnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhzdWJqZWN0MSwgc3ViamVjdDIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICAgICAgYnJhbmQ6ICdNaW5vckNyZWRpdHMnXG4gICAgfTtcbn1cbi8vIEV4YW1wbGUgdXNhZ2U6XG5jb25zdCBtYWpvcjEgPSB7IGNyZWRpdHM6IDMsIGJyYW5kOiAnTWFqb3JDcmVkaXRzJyB9O1xuY29uc3QgbWFqb3IyID0geyBjcmVkaXRzOiA0LCBicmFuZDogJ01ham9yQ3JlZGl0cycgfTtcbmNvbnN0IG1pbm9yMSA9IHsgY3JlZGl0czogMSwgYnJhbmQ6ICdNaW5vckNyZWRpdHMnIH07XG5jb25zdCBtaW5vcjIgPSB7IGNyZWRpdHM6IDIsIGJyYW5kOiAnTWlub3JDcmVkaXRzJyB9O1xuY29uc3QgdG90YWxNYWpvciA9IHN1bU1ham9yQ3JlZGl0cyhtYWpvcjEsIG1ham9yMik7XG5jb25zdCB0b3RhbE1pbm9yID0gc3VtTWlub3JDcmVkaXRzKG1pbm9yMSwgbWlub3IyKTtcbmNvbnNvbGUubG9nKCdUb3RhbCBNYWpvciBDcmVkaXRzOicsIHRvdGFsTWFqb3IpO1xuY29uc29sZS5sb2coJ1RvdGFsIE1pbm9yIENyZWRpdHM6JywgdG90YWxNaW5vcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=