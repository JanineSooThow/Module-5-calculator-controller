// page 41 - module 5

const addNumbers = (req, res) => {

    //GRAB VALUES FROM FRONT END QUERY PARAMETERS
    let number1=parseInt(req.body.number1);
    let number2=parseInt(req.body.number2);
    let sum=number1+number2

    console.log(sum)

    //RESPOND (res) TO CLIENT
    res.status(200) //200 means ok
    res.json({result:sum})
}

const subtractNumbers = (req, res) => {
  //GRAB VALUES FROM FRONT END QUERY PARAMETERS
  let number1 = parseInt(req.body.number1);
  let number2 = parseInt(req.body.number2);
  let difference = number1 - number2;

  console.log(difference);

  //RESPOND (res) TO CLIENT
  res.status(200); //200 means ok
  res.json({ result: difference });
};

// export the function for the router to access
module.exports = {
    addNumbers,
    subtractNumbers
}