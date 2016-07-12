import $ from 'jquery';
import session from '../session';

let $login = $(`
    <section id="login-page">
      <div id="modal-container">
        <h1>ChatUp</h1>
        <input id="login-input" type="text" name="username" value="" placeholder="username">
        <input type= "submit" name="enter" type="submit" />
      </div>
  </section>
`);

    $login.find('')('click', function(evt) {
        evt.preventDefault();
        session.userName = $(this).siblings('#login-input').val();
        $(this).siblings('#login-input').val('');
        location.hash = '#chatroom';
        // $login.css('display', 'none');
        $('#message-page').css('display', 'flex');
    });

export default $login;
