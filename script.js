class Card
{
    constructor(CardID, ArrayPosition)
    {
        this.ID = ID;
        this.ArrayPosition = ArrayPosition;
        this.Flipped = false;
    }

}

var CardArray;
var clicked = 0;
var ccard1, ccard2; // i need these variables to keep track of things, but preferably not global

function NewGame(CardPairs)
{
        let GeneratedID = Math.floor(Math.random() * CardPairs);

        for (let i = 0; i < CardPairs; i++) // 2 cards need the same ID
        {
            CardArray[i] = new Card(GeneratedID, i);
            CardArray[i + CardPairs] = new Card(GeneratedID, i + CardPairs);
        }
}

function OnClick(/*pass in the object that is clicked*/) // call this on card click and also pass in the thing that was clicked
{
    if (clicked > 0) // there is probably a better way
    {
        // get the second object
        // ccard2 = obj;
        // obj.flipped = true;
        // IsMatching(ccard1, ccard2); // call function to compare
        return;
    }

    // ccard1 = obj;
    // obj.flipped = true;
    clicked++;
}

function IsMatching(Card1, Card2)
{
    if (Card1.ID === Card2.ID)
    {
        // set the cards to flipped
        delete CardArray[Card1.ArrayPosition]; // remove from list of unmatched cards
        delete CardArray[Card2.ArrayPosition];
    }

    if (CardArray === null)
    {
        alert("you won");
    }

    return;
}

NewGame(/* prompt for a user input amount of cards*/);
