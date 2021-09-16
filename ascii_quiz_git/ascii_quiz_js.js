var questions = [
    {
      question: "English translation for 熊 (Xióng)",
      options: [
        "Bear",
        "Goat",
        "Fish"
      ],
      answer: 0,
    },
    {
      question: "English translation for 鳥 (Niǎo)",
      options: [
        "Elephant",
        "Bird",
        "Pig"
      ],
      answer: 1,
    },
    {
      question: "English translation for 蝴蝶 (Húdié)",
      options: [
        "Monkey",
        "Duck",
        "Butterfly"
      ],
      answer: 2,
    },
    {
      question: "English translation for 貓 (Māo)",
      options: [
        "Cat",
        "Deer",
        "Snake",
        "Dragon"
      ],
      answer: 0,
    },
    {
      question: "English translation for 毛蟲 (Máochóng)",
      options: [
        "Tiger",
        "Horse",
        "Lion",
        "Caterpillar"
      ],
      answer: 3,
    },
    {
      question: "English translation for 奶牛 (Nǎiniú)",
      options: [
        "Dog",
        "Mouse",
        "Bear",
        "Cow"
      ],
      answer: 3,
    },
  
  ]
  var pos = 0;
  var choice;
  var correct = 0;
  let answered = "DID NOT ANSWER";
  function displayQuiz(){
    if(pos >= questions.length){
      document.getElementById("test").innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      document.getElementById("test").innerHTML += '<button onclick="displayQuiz()">Play again?</button>';
      if(correct==questions.length){
        catWin();
      }
      pos = 0;
      correct = 0;
      return false;
    }
    document.getElementById("test").innerHTML = "<h3>"+questions[pos].question+"</h3>";
    document.getElementById("test").innerHTML += "<button onclick='checkResponse()'>Submit Answer</button>";
    var radio_home = document.getElementById("radio_home");
    for(var s=0;s<questions[pos].options.length; s++){
      function makeRadioButton(name,value,text,chk){
        var label = document.createElement("label");
        var radio = document.createElement("input");
        var ln_break = document.createElement("br");
        radio.type = "radio";
        radio.name = name;
        radio.just_value = value;
        if(chk=="true"){
          radio.checked = true;
        }
        label.appendChild(radio);
        label.appendChild(document.createTextNode(text));
        label.appendChild(ln_break);
        return label;
      }
      values = [0,1,2,3];
      radio_home.appendChild(makeRadioButton("rbtbutton",values[s],questions[pos].options[s],"false"));
    }
  }
  function checkResponse(){
    for(var i=0; i<document.getElementsByName("rbtbutton").length; i++){
      if(document.getElementsByName("rbtbutton")[i].checked){
        choice = document.getElementsByName("rbtbutton")[i].just_value;
        answered = "ANSWERED";
      }
    }
      if(answered=="ANSWERED"){
        if(choice==questions[pos].answer){
          correct++;
          document.getElementById("feedback").innerHTML = "Nice work! "+questions[pos].options[questions[pos].answer]+" is the correct answer.";
          catWink();
        }else{
          document.getElementById("feedback").innerHTML = "Sorry friend. "+questions[pos].options[questions[pos].answer]+" is the correct answer.";
          catBored();
        }
      }else{
        document.getElementById("feedback").innerHTML = "Please select an option";
        pos--;
      }
    document.getElementById("radio_home").innerHTML = "";
    answered = "DID NOT ANSWER";
    pos++;
    displayQuiz();
  }
  function closeWindow(){
    setTimeout(function(){
      self.close();
    },4000)
  }
  window.onbeforeunload = function(event){
    event.returnValue = "Write something clever here...";
  }
  //displayQuiz();
  document.getElementById("test").innerHTML += '<button onclick="displayQuiz()">Start Quiz</button>';