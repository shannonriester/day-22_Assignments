import $ from 'jquery';
import $login from './views/login';
import $chatInput from './views/chatInput';
import renderMessages from './views/chatroomGET';
import $post from './views/post';

//run time code needs to show home page
function router() {
  var hash = location.hash;
  if (hash === '#login'){
    $('.appContainer').empty().append($login);
  } else if (hash === '#chatroom') {
    $('#chatroom').empty.append($chatInput);
    renderMessages();
  }
}

export default router;
