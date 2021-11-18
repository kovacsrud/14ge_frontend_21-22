function App(){
    const ertek=100;
    const szamok=[12,39,455,76,557,1299,411,425,991,2337];
    const [szamlalo,setSzamlalo]=React.useState(0);
    const [isLathato,setLathato]=React.useState(true);
    return (<div>
        <h1>Jsx szintaxis</h1>
        <h2>A szám értéke:{ertek}</h2>
        <h2>A számláló:{szamlalo}</h2>
        <button onClick={()=>setSzamlalo(elozo=>elozo+1)}>Növelés</button>
        <button onClick={()=>setSzamlalo(elozo=>elozo-1)}>Csökkentés</button>
        <button onClick={()=>setLathato(!isLathato)}>Lista kapcsolás</button>
        <Buttons setSzamlalo={setSzamlalo}/>        
        
        {isLathato ?
         <ul>{szamok.map((ertek,index)=><li key={index}>{ertek}</li>)}</ul> : <ul></ul>}
        
        
        

    </div>);
}

function Buttons({setSzamlalo}){
    return (<div>
        <button onClick={()=>setSzamlalo(elozo=>elozo+1)}>+++</button>
        <button onClick={()=>setSzamlalo(elozo=>elozo-1)}>---</button>
    </div>

    );
}



ReactDOM.render(<App />,document.getElementById('app-container'));