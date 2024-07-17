import $ from 'jquery';
import _ from 'loadsh';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append("Copyright - Holberton School");

let count = 0;

function updateCounter(){
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter,500));