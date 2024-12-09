Q1: Level 200

Our national retail client has a 200-store branch network, they want to do a big promotion give-away. To participate, customers must enter their email address with a unique code (which is printed on their dockets) into OUR website. No store has more than 10,000 customers/day.
The code must be no more than 9 characters long, and we have to be able to get the following information out:
Which store does the code belong to?
Which date was the code issued?
Which customer (transaction) did the docket belong to (a number starting again at 1 every day)
Consider how easy it is for the end users to read/copy the code into the website and how we can prevent cheaters.
Write the methods for generating+decoding this unique code that will be printed on the docket by forking the following Pen: https://codepen.io/resonatetest/pen/qwGwqj

---

200 stores
email + unique code
no more that 10,000 per day

include
store, date, customer code
start count at 1 everyday

example
(storenumber)(date)(code between 1 and 10000)
obifscate code so that users cannot guess codes

Q2: Real world problem
Write a responsive “Contacts” application that allows the user to browse their contacts:
Make use of https://jsonplaceholder.typicode.com/ (/users are the contacts)
Use either VueJS, Angular or React
Make it visually appealing
No need to implement Create/Update/Delete
Provide instructions on how to run the code
