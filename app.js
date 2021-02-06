//selectors
const tdInput = document.querySelector('.td-input');
const tdButton = document.querySelector('.td-button');
const tdList = document.querySelector('.td-list');
const filterOption = document.querySelector('.filter-td');


//event listeners
tdButton.addEventListener('click',addTd);
tdList.addEventListener('click',deleteDone);
filterOption.addEventListener('click',filterTd);



//functions
function addTd(event){
    event.preventDefault();;
    const tdDiv = document.createElement('div');

    tdDiv.classList.add("td");

    const newTd  = document.createElement('li')
    newTd.innerText = tdInput.value;
    newTd.classList.add('td-item');
    tdDiv.appendChild(newTd);


    const completeButton =  document.createElement('button');
    completeButton.innerHTML='<i class="fas fa-plus"></i>';
    completeButton.classList.add("complete-btn");
    tdDiv.appendChild(completeButton);

    const trashButton =  document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-minus"></i>';
    trashButton.classList.add("trash-btn");
    tdDiv.appendChild(trashButton);

    tdList.appendChild(tdDiv);

    tdInput.value="";


}

function deleteDone(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
        const td = item.parentElement;
        td.classList.add("fall");
        td.addEventListener('transitionend',function(){
            td.remove();
                    });

        
    }
   
    if(item.classList[0] === 'complete-btn'){
        const td = item.parentElement;
        td.classList.toggle('completed');

    }


}

function filterTd(e){
    const tds = tdList.childNodes;
    tds.forEach(function(td){
        switch(e.target.value){
            case "all":
                td.style.display = 'flex';
                break;
            
            case 'completed':
                if(td.classList.contains('completed')){
                    td.style.display = 'flex';
                }
                else{
                    td.style.display = 'none';
                }
            case "uncompleted":
                if(!td.classList.contains('completed')){
                    td.style.display = 'flex';
                }
                else{
                    td.style.display = 'none';
                }


        }
    });


}

