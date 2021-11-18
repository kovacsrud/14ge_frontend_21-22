# Frontend fejlesztés (ReactJS)

A natív javascripttel végzett programozás nem egyszerű, és ha sok elemet kell használni, akkor nagyon gyorsan káosz alakul ki. Szinte minden programozási nyelvnél megjelenik az igény, hogy a feladat elemei komponensekre kellene bontani. Natív Javascripttel ez nehéz, ezért az idők folyamán több library, valamint framework is született arra, hogy a webfejlesztés során könnyebben lehessen komponenseket létrehozni. 

A továbbiakban a React libraryval fogunk foglalkozni. 
A natív Javascript esetében a kódunk procedurális, míg a React esetében deklaratív.

### Natív JS-el létrehozott gomb
```js
const btn=document.createElement('button');
btn.onclick=function(){
    alert('JS button');
}

btn.textContent='JS Gomb';
document.getElementById('js-button-container').appendChild(btn);
```
### React segítségével létrehozott gomb

```js
const reactGomb=React.createElement('button',{
    onClick:function(){
        alert('React button');
    }
},"React gomb");

ReactDOM.render(reactGomb,document.getElementById('react-button-container'));
```
### Hozzuk működésbe!

Először is kell egy HTML oldal. A HTML oldalban be kell majd tölteni a React könyvtárait , illetve betöltünk Bootstrap-et is, hogy a későbbi példákban tudjunk könnyedén stílusokat használni.
```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8"> 
    <title>React bemutatás</title>
</head>
<body>
    <h2>Natív:</h2>
    <div id='js-button-container'></div>
    <h2>React:</h2>
    <div id='react-button-container'></div>

    
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="app.js"></script>
</body>
</html>
```
A két div elem két belépési pontot jelent, az egyikhez a hagyományos, natív kódot rendeljük, a másikhoz a React kódot. A kódot egy **app.js** fájlba tegyük bele.

```js
const btn=document.createElement('button');
btn.onclick=function(){
    alert('Js button');
}

btn.textContent='Js Gomb';
document.getElementById('js-button-container').appendChild(btn);

//React

const reactGomb=React.createElement('button',{
    onClick:function(){
        alert('React button');
    }
},"React gomb");

ReactDOM.render(reactGomb,document.getElementById('react-button-container'));

```
A React.createElement három paramétert vár. Az első, hogy milyen elemet szeretnénk létrehozni, ez most **button**. A második paraméter az elem összes általunk megadott tulajdonságát tartalmazza, objektumként kell megadni, azaz minden amit itt átadunk azt {} zárójelek közé kell tenni. Itt most csak az **onClick** eseményhez adunk meg egy függvényt. A harmadik paraméter ennek az elemnek az összes gyermek eleme (ha van). Itt most gyerek elemként a **React gomb** szöveg szerepel.

Az elemet a ReactDOM.render() függvény fogja renderelni, ez két paramétert vár, az egyik az elem, a másik pedig egy referencia arra a div elemre, ahová be akarjuk "kötni" ezt az elemet, ezt adja a **getElementById('react-button-container')**

## JSX szintaxis

A JSX szintaxis jelentősen képes megkönnyíteni a React-el végzett fejlesztést. Probléma viszont, hogy a böngészők nem ismerik ezt a szintaxist, ezért egy fordító segítségével le kell a .jsx szintakszissal írt kódokat fordítani a böngésző számára értelmezhető formára. Ez a fordító a Babel. A Babel-t hozzá lehet adni a projekthez, ami automatikusan átfordítja majd a .jsx-et .js-re.

Inicializáljunk egy projektet:
```js
npm init -y
```

A Babel telepítése  a projektbe:
```js
npm install babel-cli@6 babel-preset-react-app@3
```
A telepítést követően a package.json-ba tegyük be a következő sort a scripts-be:
```js
"dev":"npx babel --watch src --out-dir . --presets react-app/prod" 
```
Ezután az **npm run dev** parancs hatására a Babel fut és a .jsx fájl mentésekor lefordítja ezt .js-re.
