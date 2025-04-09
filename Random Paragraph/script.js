let text = [
  `"Can I get you anything else?" David asked. It was a question he asked a hundred times a day and he always received the same answer. It had become such an ingrained part of his daily routine that he had to step back and actively think when he heard the little girl's reply. Nobody had before answered the question the way that she did, and David didn't know how he should respond.`,
  `She put the pen to paper but she couldn't bring herself to actually write anything. She just stared at the blank card and wondered what words she could write that would help in even a small way. She thought of a dozen ways to begin but none seemed to do justice to the situation. There were no words that could help and she knew it.`,
  `Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.`,
  `Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.`,
  `The shades were closed keeping the room dark. Peter knew that he should open them and let in the sunlight so he could begin the day, but he didn't have the energy or willpower. Nothing had gone as expected the day before and he no longer wanted to spend the energy to begin a new day. He stared at the shades wondering if there was a way to disappear from the reality of the world for the rest of the day.`,
  `Indescribable oppression, which seemed to generate in some unfamiliar part of her consciousness, filled her whole being with a vague anguish. It was like a shadow, like a mist passing across her soul's summer day. It was strange and unfamiliar; it was a mood. She did not sit there inwardly upbraiding her husband, lamenting at Fate, which had directed her footsteps to the path which they had taken. She was just having a good cry all to herself. The mosquitoes made merry over her, biting her firm, round arms and nipping at her bare insteps.`,
  `There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly.`,
  `The coin hovered in the air, spinning over and over again. It reached its peak and began to descend. Both boys were pleading with it to land a certain way but the coin had already made up its mind on what it was going to do.`,
];
let items = document.querySelector("#items");
let btn = document.querySelector("#btn");
let dataContainer = document.querySelector("#data");

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
};

const generate = () => {
    
  if (isNaN(items.value) || items.value < 0 || items.value > 8) {
    const randomIndex = Math.floor(Math.random() * text.length);
    dataContainer.innerHTML = `<p>${text[randomIndex]}</p>`;
  } else {
    const localText = shuffle(text)
    const data =localText.slice(0, items.value);
   const paras = data.map(
    (d)=>{
        return `<p>${d}</p>`
    }
   );
   dataContainer.innerHTML=paras.join('');
   //array to string;
    
  }
};
btn.addEventListener("click", generate);
