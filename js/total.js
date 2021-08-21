const eightGbMemory = document.getElementById("memory-1"); //catch the id
const sixteenGbMemory = document.getElementById("memory-2");
const storage1 = document.getElementById("storage-1");
const storage2 = document.getElementById("storage-2");
const storage3 = document.getElementById("storage-3");
const delivery1 = document.getElementById("delivery-1");
const delivery2 = document.getElementById("delivery-2");
const memoryCost = document.getElementById("memory-inp");
const storageCost = document.getElementById("storage-inp");
const deliveryCost = document.getElementById("delivery-inp");
const bestCost = document.getElementById("best-inp");
const totalCost = document.getElementById("total-inp");
const totalAmount = document.getElementById("totalAmountInp");


eightGbMemory.addEventListener("click",function(){
    memoryCost.innerText = 0;
    updateTotal();
})
sixteenGbMemory.addEventListener("click",function(){
    memoryCost.innerText = 180;
    updateTotal();
})
storage1.addEventListener("click",function(){
    storageCost.innerText = 0;
    updateTotal();
})
storage2.addEventListener("click",function(){
    storageCost.innerText = 100;
    updateTotal();
})
storage3.addEventListener("click",function(){
    storageCost.innerText = 180;
    updateTotal();
})
delivery1.addEventListener('click',function(){
    deliveryCost.innerText = 0;
    updateTotal();

})
delivery2.addEventListener('click',function(){
    deliveryCost.innerText = 20;
    updateTotal();
})
function updateTotal(){
     const bestPrice = parseInt(bestCost.innerText);
     const memoryPrice = parseInt(memoryCost.innerText);
     const storagePrice = parseInt(storageCost.innerText);
     const deliveryPrice = parseInt(deliveryCost.innerText);
     const total = bestPrice + memoryPrice + storagePrice +deliveryPrice;
     totalAmount.innerText=total;
     totalCost.innerText = total;

}