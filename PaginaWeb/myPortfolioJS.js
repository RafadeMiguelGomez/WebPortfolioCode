var SkillsButton = document.querySelector('.Button.Skills');
var InformationButton = document.querySelector('.Button.Information');
var HobbiesButton = document.querySelector('.Button.Hobbies');

var SkillsContainer = document.querySelector('.BottomSection .Skills');
var InformationContainer = document.querySelector('.BottomSection .Information');
var HobbiesContainer = document.querySelector('.BottomSection .Hobbies');

SkillsButton.addEventListener('click', onClickSkills);
InformationButton.addEventListener('click', onClickInformation);
HobbiesButton.addEventListener('click', onClickHobbies);

function onClickSkills() {
    InformationContainer.setAttribute('class','Information invisible');
    SkillsContainer.setAttribute('class','Skills');
    HobbiesContainer.setAttribute('class','Hobbies invisible');
};

function onClickInformation() {
    InformationContainer.setAttribute('class','Information');
    SkillsContainer.setAttribute('class','Skills invisible');
    HobbiesContainer.setAttribute('class','Hobbies invisible');
};

function onClickHobbies() {
    InformationContainer.setAttribute('class','Information invisible');
    SkillsContainer.setAttribute('class','Skills invisible');
    HobbiesContainer.setAttribute('class','Hobbies');
};
