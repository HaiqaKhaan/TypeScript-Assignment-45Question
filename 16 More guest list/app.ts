let guest_list : string [] = ['Ahmed','Noor','Esha','Aliyan']
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
// }
let not_present : string = 'Esha';
let new_guest : string = 'Haiqa Khan';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
}
console.log(`Ms.${not_present} will not comming on tomorrow dinner. `)

guest_list.unshift('Moosa','Sila','Dua');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
}
