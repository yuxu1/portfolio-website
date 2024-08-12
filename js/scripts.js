//Pokedex app dialog
const poke_modal = document.querySelector('[pokedex-modal]');
const pokeOpenButton = document.querySelector('[open-pokedex-modal]');
const pokeCloseButton = document.querySelector('[close-pokedex-modal]');

pokeOpenButton.addEventListener("click", () => {
    poke_modal.showModal();
});
pokeCloseButton.addEventListener("click", () => {
    poke_modal.close();
})

//myflix API dialog
const myflix_api_modal = document.querySelector('[myflix-api-modal]');
const myflixApiOpenButton = document.querySelector('[open-myflix-api-modal]');
const myflixApiCloseButton = document.querySelector('[close-myflix-api-modal]');

myflixApiOpenButton.addEventListener("click", () => {
    myflix_api_modal.showModal();
});
myflixApiCloseButton.addEventListener("click", () => {
    myflix_api_modal.close();
})

//myflix (React) dialog
const myflix_react_modal = document.querySelector('[myflix-react-modal]');
const myflixReactOpenButton = document.querySelector('[open-myflix-react-modal]');
const myflixReactCloseButton = document.querySelector('[close-myflix-react-modal]');

myflixReactOpenButton.addEventListener("click", () => {
    myflix_react_modal.showModal();
});
myflixReactCloseButton.addEventListener("click", () => {
    myflix_react_modal.close();
})

//meet app dialog
const meet_modal = document.querySelector('[meet-modal]');
const meetOpenButton = document.querySelector('[open-meet-modal]');
const meetCloseButton = document.querySelector('[close-meet-modal]');

meetOpenButton.addEventListener("click", () => {
    meet_modal.showModal();
});
meetCloseButton.addEventListener("click", () => {
    meet_modal.close();
})

//chat app dialog
const chat_modal = document.querySelector('[chat-modal]');
const chatOpenButton = document.querySelector('[open-chat-modal]');
const chatCloseButton = document.querySelector('[close-chat-modal]');

chatOpenButton.addEventListener("click", () => {
    chat_modal.showModal();
});
chatCloseButton.addEventListener("click", () => {
    chat_modal.close();
})

//myflix (Angular) dialog
const myflix_angular_modal = document.querySelector('[myflix-angular-modal]');
const myflixAngularOpenButton = document.querySelector('[open-myflix-angular-modal]');
const myflixAngularCloseButton = document.querySelector('[close-myflix-angular-modal]');

myflixAngularOpenButton.addEventListener("click", () => {
    myflix_angular_modal.showModal();
});
myflixAngularCloseButton.addEventListener("click", () => {
    myflix_angular_modal.close();
})

//command line recipe app dialog
const CL_recipe_modal = document.querySelector('[CL-recipe-modal]');
const CLRecipeOpenButton = document.querySelector('[open-CL-recipe-modal]');
const CLRecipeCloseButton = document.querySelector('[close-CL-recipe-modal]');

CLRecipeOpenButton.addEventListener("click", () => {
    CL_recipe_modal.showModal();
});
CLRecipeCloseButton.addEventListener("click", () => {
    CL_recipe_modal.close();
})

//web recipe app dialog
const web_recipe_modal = document.querySelector('[web-recipe-modal]');
const webRecipeOpenButton = document.querySelector('[open-web-recipe-modal]');
const webRecipeCloseButton = document.querySelector('[close-web-recipe-modal]');

webRecipeOpenButton.addEventListener("click", () => {
    web_recipe_modal.showModal();
});
webRecipeCloseButton.addEventListener("click", () => {
    web_recipe_modal.close();
})