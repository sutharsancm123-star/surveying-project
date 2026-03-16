function showNote(topic){

let content = document.getElementById("content");

if(topic === "chain"){
content.innerHTML = `
<h2>Chain Surveying</h2>
<p>Chain surveying is the simplest method of surveying.
It is used for small areas with simple details.</p>

<ul>
<li>Main stations</li>
<li>Base line</li>
<li>Check lines</li>
<li>Tie lines</li>
</ul>
`;
}

else if(topic === "compass"){
content.innerHTML = `
<h2>Compass Surveying</h2>
<p>Compass surveying is used when angles are measured using a compass.</p>

<ul>
<li>Prismatic Compass</li>
<li>Surveyor Compass</li>
<li>Bearing system</li>
</ul>
`;
}

else if(topic === "leveling"){
content.innerHTML = `
<h2>Levelling</h2>
<p>Levelling determines the elevation difference between points.</p>

<ul>
<li>Simple leveling</li>
<li>Differential leveling</li>
<li>Fly leveling</li>
</ul>
`;
}

else if(topic === "theodolite"){
content.innerHTML = `
<h2>Theodolite Survey</h2>
<p>Theodolite is used to measure horizontal and vertical angles.</p>

<ul>
<li>Transit Theodolite</li>
<li>Vernier Theodolite</li>
</ul>
`;
}

}
