let choice 
do {
    choice =  prompt(`Que souhaitez-vous faire ? \n\n1-Addition \n2-Multiplication \n3-Soustraction \n4-Division`); 

} while ( choice !== "1" && choice !== "2" && choice !== "3" && choice !== "4" || choice == null);





console.log(choice)