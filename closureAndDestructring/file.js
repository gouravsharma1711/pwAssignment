// task : 01
console.log("Task 01 :- ");
let createCounter=()=>{
    let count=0;
    return ()=>{
        count++;
        console.log(`count : ${count}`);
    }
}
let buttonClicked=createCounter();
buttonClicked();
buttonClicked();
buttonClicked();
//task : 02
console.log("Task 02 :- ");

let order ={
    orderId:"123456",
    productName:"Laptop",
    quantity:2
};
let {orderId,productName,quantity}=order;
console.log(orderId);
console.log(productName);
console.log(quantity);

// task : 03
console.log("Task 03 :- ");

let shoppingCart=()=>{
    let cartItems=[{id:1,name:"laptop",price:10}];

    return {
        getCartItems:()=>{
            console.log("Item present in cart :- ");
            console.log(cartItems);
        },
        addItem:(product)=>{
            console.log('Product successfully added');
            cartItems.push(product);
        },
        removeItem:(itemNumber)=>{
            let i=itemNumber-1;
            cartItems.splice(itemNumber-1,1);
            console.log(`Item Deleted`);
        }
    }
}
let cart=shoppingCart();
let {getCartItems,addItem,removeItem}=cart;
getCartItems();

// task : 04
console.log("Task 04 :- ");

class Product {
    constructor(id,productName,price){
        this.id=id;
        this.productName=productName;
        this.price=price;
    }
}
let p1=new Product(2,"product 1",10);
let p2=new Product(3,"product 2",20);
addItem(p1);
addItem(p2);
getCartItems();

// task : 05
console.log("Task 05 :- ");
removeItem(1);
getCartItems();

// task : 06
// subTask :01
console.log("Task 06 :- ");
const createPlaylist=(playlistName)=>{
    let playlist=[];
    return {
        addSong:(song,artist)=>{
            playlist.push({"song Name":song,"Artist Name":artist});
            console.log("song is added");
        },
        listSongs:()=>{
            if(playlist.length===0)console.log('playlist is Empty');
            else {
                console.log(`${playlistName} playlist : ${playlist.map(song=> `${song["song Name"]}  by ${song["Artist Name"]}`).join(', ')}`);
            }
        }
    }
}
// subTask :02
let addsong=(playlist,songName,artist)=>{
    playlist.addSong(songName,artist);
}
// subTask : 03
let listSongs=(playlist)=>{
    playlist.listSongs();
}

const playlist1=createPlaylist("my fav");
addsong(playlist1,"song1","artist1");
addsong(playlist1,"song2","artist2");
addsong(playlist1,"song3","artist3");
listSongs(playlist1);
const playlist2=createPlaylist("my non fav");
addsong(playlist2,"song1","artist1");
addsong(playlist2,"song2","artist2");
addsong(playlist2,"song3","artist3");
listSongs(playlist2);
