using System;
using System.Collections.Generic;

namespace deckOfCards
{
       class Card
        {
            public string stringVal{get; set;}
            public string suit{get; set;}
            public int val{get; set;}
        
        }
        class Deck
        {
            List <Card> cards = new List<Card>(); 
            public void deckConstructor()
            {
                for(int i = 1; i <= 13; i++)
                {
                    string tmpVal;
                    switch(i)
                    {
                        case 1:
                            tempVal = "Ace";
                            break;
                        case 11:
                            tempVal = "Jack";
                            break;
                        case 12:
                            tempVal = "Queen";
                            break;
                        case 13:
                            tempVal = "King";
                            break;
                        default:
                            tmpVal = i.ToString();
                            break;
                    }
                    cards.Add(new Card(){stringVal = tmpVal, suit = "diamond", val =i});
                    cards.Add(new Card(){stringVal = tmpVal, suit = "clubs", val =i});
                    cards.Add(new Card(){stringVal = tmpVal, suit = "spades", val =i});
                    cards.Add(new Card(){stringVal = tmpVal, suit = "hearts", val =i});
                }
            }
            public void reset()
            {
                cards.Clear();
                deckConstructor();
            }
            public void Shuffle()
            {
                Random rand = new Random();
                int n = cards.Count;
                while (n > 1)
                {
                    n--;
                    int k = rand.Next(0, n);
                    Card temp = cards[k];
                    cards[k] = cards[n];
                    cards[n] = temp;
                }
            }
            public Card deal()
            {
                Card top = cards[0];
                cards.RemoveAt(0);
                return top;
            }
            
        }
        class Player
        {
            List<Card> hand = new List<Card>();
            string Name;

        Deck playerdeck = new Deck();

        public void start()
        {
            playerdeck.deckConstructor();
            playerdeck.shuffle();
        }
        public Card draw()  
        {
            Card current = playerdeck.deal();
            hand.Add(current);
            return current; 

        }
        public Card discard(int index)
        {
            Card top = cards[index];
            hand.RemoveAt(index);
            return top;
        }
    }







// Give the Deck a shuffle method that randomly reorders the deck's cards.
// Finally, create a class called "Player"

// Give the Player class a name property.
// Give the Player a hand property that is a List of type Card.
// Give the Player a draw method of which draws a card from a deck, adds it to the player's hand and returns the Card.
// Note this method will require reference to a deck object
// Give the Player a discard method which discards the Card at the specified index from the player's hand and returns this Card or null if the index does not exist.
 class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
