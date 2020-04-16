function baby(){
fetch('https://harman221.github.io/COMP1073FinalExam/cats.json')
.then((resp) => resp.json())
.then(function(data) {

console.log(data);
let myCats = data;
cats(myCats);
});
}

function cats(jsonObj) {
     let cats = jsonObj.cats;
    for (let i = 0; i < cats.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', cats[i].photo);
        img.setAttribute('alt', cats[i].name);
        img.setAttribute('height', '300px');
        img.setAttribute('width', '300px');
        h2.textContent = cats[i].name;
        h3.textContent = "Age: " + cats[i].age;        
        p.textContent = 'species: ' + cats[i].species;
        let favFoods = cats[i].favFoods;
        for (let j = 0; j < favFoods.length; j++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = favFoods[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}