import $ from 'jquery';

function renderMessages() {
  let $parentChatroom = $('#chatroom');
  let $parentMessages = $(`
			<div id="chat-container">
				<ul class="entire-chat-box">
				</ul>
			</div>
    `);
  $.ajax({
        url: 'https://tiny-za-server.herokuapp.com/collections/day21_chatup_sriester',
        type: 'GET',
        success: function(data){
            data.forEach((message, i, arr) => {
                let $messageList = $(`
                  <li class = "message-list-item">
                    <h4>${msgObj.sender}</h4>
                    <span>${msgObj.timeStamp}</span>
                    <p>${msgObj.msgBody}</p>
                  </li>
                  `);
                $parentMessages.find('ul').append($messageList);
            });
        }
    });
  }

export default renderMessages;
