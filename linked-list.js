/* 
    Linked List in JS
    Memory  size : 10 blocks


    Variables ~ 
    
    addr_list : Array which store address list
    addr : Holds latest address generated randomly
    linked_list : Holds the linked list

    Functions ~
    
    genrateAddr() : Generates random address between 0-9
    insertNode() : Inserts nodes into linked list

*/

let addr_list = [];
let linked_list = {};


let generateAddr = () => {    
    let addr = Math.floor(Math.random() * 10);
    if (addr_list.includes(addr)) {
        if(addr_list.length == 10)
            return -1;
        return generateAddr();
    }
    addr_list.push(addr);
    return addr;
}

let insertNode = (data) => {
    let addr = generateAddr();
    if(addr == -1){
        return "Memory Full!"
    }else{
        if(addr_list.length == 1){
            linked_list = { ...linked_list, [addr]: { data, 'next' : null } };
        }else{
            //traversing is wrong and just for testing purpose
            for(let temp_addr in linked_list){
                if(linked_list[temp_addr]['next'] == null){
                    linked_list[temp_addr]['next'] = addr;
                }
            }
            linked_list = { ...linked_list, [addr]: { data, 'next': null } };
        }
    }
}

insertNode(100);
insertNode(200);
insertNode(300);
insertNode(400);
insertNode(500);
insertNode(600);
insertNode(700);
insertNode(800);
insertNode(900);
console.log(linked_list);



