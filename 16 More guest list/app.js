var guest_list = ['Ahmed', 'Noor', 'Esha', 'Aliyan'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
// }
var not_present = 'Esha';
var new_guest = 'Haiqa Khan';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
}
console.log("Ms.".concat(not_present, " will not comming on tomorrow dinner. "));
guest_list.unshift('Moosa', 'Sila', 'Dua');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
}
