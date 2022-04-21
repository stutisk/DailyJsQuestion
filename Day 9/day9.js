// given three angles of triangle, check whether its scalene , isosceles , equilateral or not a triangle

// question 1
const typeOfTriangle = (a, b, c) => {

  if(a===b && b===c){
      console.log("equilateral traingle")
  }
  else if (a===b || b===c || c===a){
      console.log("isosceles triangle")
  }
  else if(a!=b && b!=c && c!=a){
    console.log("scalene traingle")
  }
  else{
    console.log("not a triangle")
  }
};

typeOfTriangle(30,60,90);

// question 2

// given two dates function should return which one comes first
