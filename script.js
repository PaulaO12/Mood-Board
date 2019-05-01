var happyPics=[
    "https://www.ajourneytofi.com/wp-content/uploads/2017/11/featured.jpg",
    "http://www.littlestarblog.com/wp-content/uploads/2014/01/LittlestarblogBeHappy1.jpg",
    "https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/03/h6-1521531233.jpg"
    ];
var sadPics= [
    "https://i.ytimg.com/vi/22yQbNVqFOQ/maxresdefault.jpg",
    "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/06/avengers_infinity_war_sad_tony.jpg",
    "https://requestreduce.org/images/sad-book-clipart-8.png"
    ];
var boredPics= [
    "https://www.theladders.com/wp-content/uploads/Bored_At_WORk_092018.jpg",
    "https://ih0.redbubble.net/image.582662019.6557/flat,1000x1000,075,f.u2.jpg",
    "http://kc-communications.com/wp-content/uploads/2014/11/Bored.jpg"
    ];
var excitedPics= [
    "https://fullmoonpet.com/wp-content/uploads/2017/01/iStock-534308355.jpg",
    "https://media1.giphy.com/media/37R3fbYQpWQ7m2WOsF/source.gif",
    "https://i.pinimg.com/originals/ea/a1/c7/eaa1c7b6f7d0046ca3fb099b467bbb36.jpg"
];
$("#go").click(function(){
    var mood = $("input").val();
    $("#images").html("");
    if( mood === "happy"){
        Happymood();
    }
    else if(mood === "sad"){
        Sadmood();

        }
    else if(mood === "bored"){
        Boredmood();
        }
    else if(mood === "excited"){
        Excitedmood();
    }
    else{
     alert("Please enter happy, sad, excited or bored!");   
    }
});

function Happymood(){
    mood("orange","yellow",happyPics);
    }
function Sadmood(){
    mood("#3A4887","black",sadPics);
    }
function Excitedmood(){
    mood("#4BCCC6","#1D4F4D",excitedPics);
    }
function Boredmood(){
    mood("#828283","#1A1D27",boredPics);
    }
function mood(backgroundColor,textColor,images){
    $("body").css("background-color", backgroundColor);
    $("body").css("color", textColor);
    $("#images").html("");
    images.forEach(function(sad){
    $("#images").append("<img src=" + sad + ">");
});
}


