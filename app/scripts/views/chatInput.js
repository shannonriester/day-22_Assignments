import $ from 'jquery';

let $nav = $(`
  <div class="chat-interaction">
    <input id="chat-input" type="text" name="name" placeholder="...">
    <button id="send-btn" type="button" name="button">send</button>
  </div>
`);

export default $chatInput;
