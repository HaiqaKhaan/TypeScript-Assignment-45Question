let guest_list : string [] = ['Ahmed','Noor','Esha','Aliyan']
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
// }
let not_present : string = 'Esha';
let new_guest : string = 'Haiqa Khan';
guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
// }
// console.log(`Ms.${not_present} will not comming on tomorrow dinner. `)

guest_list.unshift('Moosa','Sila','Dua');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nI invited you on dinner tomorrow.\nThank You\n');
// }
console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam, ${remove_guest} you are not invited for dinner.`)
}
for(let i=0; i<guest_list.length; i++){
     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner.\nThank You\n');
 }
guest_list.splice(0,2)
console.log(guest_list)